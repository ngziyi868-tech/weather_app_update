const city = "Tooele";
const apiKey = "889f86ea113204ba293d53abe0617a4b";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid={apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid={apiKey}`;

async function getWeatherData() {
  try {
    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    displayCurrentWeather(weatherData);
    updateCurrentDate();
  } catch (error) {
    console.error("Weather Error:", error);
    alert("Error");
  }
}

getWeatherData();

function displayCurrentWeather(data) {
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const weatherDesc = data.weather[0].description;

  let windChill = "N/A";
  if (temp <= 50 && windSpeed > 3) {
    windChill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temp * Math.pow(windSpeed, 0.16);
    windChill = Math.round(windChill);
  }

  document.getElementById("current-temp").textContent = `${temp}g`;
  document.getElementById("current-windChill").textContent = `${windChill}°F`;
  document.getElementById("current-humid").textContent = `${humidity}%`;
  document.getElementById("current-windSpeed").textContent = `${windSpeed} mph`;
  document.getElementById("current-desc").textContent = weatherDesc;

  const tempElement = document.getElementById("current-temp");
  if (tempElement) tempElement.textContent = `${Math.round(temp)}`



  const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const icon = document.getElementById("current-icon");
  icon.src = iconURL;
  icon.alt = weatherDesc;

}
