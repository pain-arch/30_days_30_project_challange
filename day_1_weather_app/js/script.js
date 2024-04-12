const apiKey = "685e5e7dadee18bb1990f3fbe7a04396";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kerala";

async function getWeatherData() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

getWeatherData();