const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "40aa0072392f41f6baafcb305107b47e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if (data && data.name && data.weather && data.weather[0] && data.main && data.main.temp) {
          city.innerText = data.name;
          weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        } else {
          console.error("Invalid data received from API");
        }
      })
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);