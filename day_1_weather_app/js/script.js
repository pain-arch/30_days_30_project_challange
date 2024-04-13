const apiKey = "685e5e7dadee18bb1990f3fbe7a04396";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");


async function getWeatherData(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";  
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";  
    }
    else if (data.weather[0].main == "drizzle") {
        weatherIcon.src = "images/drizzle.png";  
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";  
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";  
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";  
    }

    document.querySelector(".weather").style.display = "block";
}


searchBtn.addEventListener("click", ()=> {

    getWeatherData(searchBox.value);
    
})
