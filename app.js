let result = document.querySelector("#result");
let searchBtn = document.querySelector("#search-btn");

let cityRef = document.querySelector("#city");
let unitsSelection = document.querySelector("#units");

//fetch details from api
let getWeather = () => {
    let cityValue = cityRef.value;
    let units = unitsSelection.value;
    //if input is empty
    if (cityValue.length == 0) {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`
    }
    else {
       
    //clear inout field
    cityRef.value = "";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=${units}`;
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp}&#176</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}</h4>
                </div>
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}</h4>
                </div>
            </div>
            `;
    })
    .catch(() => {
        result.innerHTML = '<h3 class="msg">City not found</h3>';
    });
       
    }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);