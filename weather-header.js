const city = "Tooele";
const apiKey = "889f86ea113204ba293d53abe0617a4b";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid={apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid={apiKey}`;

async function getWeatherData() {
  try {
    const weatherResponse = await fetch(weatherURL);
    const weatherData = await weatherResponse.json();

    displayCurrentWeather(weatherData);

    const forecastResponse = await fetch(forecastURL);
    if (!forecastResponse.ok) throw new Error("Error");
    const forecastData = await forecastResponse.json();
    displayForecast(forecastData);

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

  document.getElementById("current-temp").textContent = `${temp}°F`;
  document.getElementById("current-windChill").textContent = `${windChill}°F`;
  document.getElementById("current-humid").textContent = `${humidity}%`;
  document.getElementById("current-windSpeed").textContent = `${windSpeed} mph`;
  document.getElementById("current-desc").textContent = weatherDesc;

  const tempElement = document.getElementById("current-temp");
  if (tempElement) tempElement.textContent = `${Math.round(temp)}°F`;

  const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const icon = document.getElementById("current-icon");
  icon.src = iconURL;
  icon.alt = weatherDesc;
}

function displayForecast(data) {
  const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  dailyForecast.slice(0,5).forEach((dayData, index) =>{
    const temp= Math.round(dayData.main.temp);
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = dayData.weather[0].description;

    const tempElement = document.getElementById(`data${index + 1}`);
    if (tempElement) tempElement.textContent = temp;

    const forecastImg = document.querySelectorAll(".flex-col img")[index];
    if(forecastImg){
      forecastImg.src = iconURL;
      forecastImg.alt = desc;
    }
  });
}


function updateCurrentDate() {
  const dateElement = document.getElementById("current-date");
  if (!dateElement) return;
  const now = new Date();
  const options = { weekday: "long", day: "numeric", year: "numeric" };
  const formattedDate = now.toLocaleDateString("en-US", options);
  dateElement.textContent = `Date: ${formattedDate}`;
}
