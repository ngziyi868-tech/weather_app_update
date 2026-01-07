const city = "Tooele";
const apiKey = "889f86ea113204ba293d53abe0617a4b";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid=${apiKey}`;


const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=18abc84001204202af32ebe2354a09a3`


async function getWeatherData() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    displayCurrentWeather(data);

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

  let windChill = "N/A";
  if (temp <= 50 && windSpeed > 3) {
    windChill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temp * Math.pow(windSpeed, 0.16);
    windChill = Math.round(windChill);
  }

  const tempEl = document.getElementById("current-temp");
  if(tempEl) tempEl.textContent = `${temp}°F`;

  const windChillEl = document.getElementById("current-windChill");
  if(windChillEl)windChillEl.textContent = `${windChill}°F`;

  const humidEl = document.getElementById("current-humid");
  if(humidEl) humidEl.textContent = `${humidity}%`;

  const windSpeedEl = document.getElementById("current-windSpeed");
  if(windSpeedEl) windSpeedEl.textContent = `${windSpeed} mph`;

 
  const iconEl = document.getElementById("current-icon");
  if(iconEl){
  iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  iconEl.alt = "weatherDesc";

  }
}

function displayCurrentNews(newsData){
  if(!newsData.articles || newsData.articles.length === 0) return;
  
}


function updateCurrentDate() {
  const dateElement = document.getElementById("current-date");
  if (!dateElement) return;

  const now = new Date();
  const options = { weekday: "long", day: "numeric", year: "numeric" };
  dateElement.textContent = `Date: ${now.toLocaleDateString("en-US", options)}`;
}


const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=18abc84001204202af32ebe2354a09a3`

