const weatherURL= "https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid={889f86ea113204ba293d53abe0617a4b}"

fetch(weatherURL)
    .then(response => response.json())
    .then(jsObject => {

    });


document.getElementById('current-temp')    