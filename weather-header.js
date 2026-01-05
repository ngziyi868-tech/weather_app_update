const weatherURL= "https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid={889f86ea113204ba293d53abe0617a4b}"

fetch(weatherURL)
    .then(response => {
        if (!response.ok) {
     
        }
    }

    );


document.getElementById('current-temp').textContent = `${temp}°F`;
document.getElementById('current-windChill').textContent = `${windChill}°F`;
document.getElementById('current-humid').textContent = `${humidity}%`;
document.getElementById('current-windSpeed').textContent = `${windSpeed} mph`;
document.getElementById('current-desc').textContent = weatherDesc;

const iconURL = ``