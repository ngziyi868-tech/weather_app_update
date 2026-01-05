const city = "Tooele";
const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid=889f86ea113204ba293d53abe0617a4b";

async function getWeatherData() {
  try {
    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    displayCurrentWeather(weatherData);

  } catch (error) {
    console.error("Error:", error);
    alert("Error");
  }
}

getWeatherData();


function displayCurrentWeather(data) {
    const temp = data,main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherDesc = data.weather[0].description;
    

}



document.getElementById("current-temp").textContent = `${temp}°F`;
document.getElementById("current-windChill").textContent = `${windChill}°F`;
document.getElementById("current-humid").textContent = `${humidity}%`;
document.getElementById("current-windSpeed").textContent = `${windSpeed} mph`;
document.getElementById("current-desc").textContent = weatherDesc;

const iconURL = `https://openweathermap.org/img/wn/{data.weather[0].icon}@2x.png`;
const icon = document.getElementById("current-icon");
icon.src = iconURL;
icon.alt = weatherDesc;
