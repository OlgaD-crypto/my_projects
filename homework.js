// Today's time and date

let time = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
});
let today = document.querySelector("#today");
today.innerHTML = `${time.format(Date.now())}`;
let todayDate = document.querySelector("#date");
let date = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
todayDate.innerHTML = `${date.format(Date.now())}`;

// searching for the city's data
let apiKey = "7ed20b3871d9e4f3837ef60fa128bf28";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let apiUrlForecast = "https://api.openweathermap.org/data/2.5/onecall?";

let units = "metric";

function search(city) {
  axios
    .get(`${apiUrl}q=${city}&appid=${apiKey}&units=${units}`)
    .then(displayTemp);

  axios
    .get(`${apiUrl}q=${city}&appid=${apiKey}&units=${units}`)
    .then(coordCity);
}

// searching for the citie's coord
function coordCity(res) {
  let latCity = res.data.coord.lat;
  let lonCity = res.data.coord.lon;
  axios
    .get(
      `${apiUrlForecast}lat=${latCity}&lon=${lonCity}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`
    )
    .then(displayForecast);
}

function searching(event) {
  event.preventDefault();
  city = document.querySelector("#city-to-search").value;
  search(city);
}

let citySearch = document.querySelector("#city-to-search");
citySearch.addEventListener("search", searching);

let citySearch1 = document.getElementById("button-search");
citySearch1.addEventListener("click", searching);

const rad = document.querySelectorAll('input[type="radio"]');

for (const radio of rad) {
  radio.addEventListener("change", check);

  function check(event) {
    let target = event.target;

    switch (target.id) {
      case "fahrenheit":
        units = "imperial";
        search(city);

        break;
      case "celsius":
        units = "metric";
        search(city);

        break;
    }
  }
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}

function currentPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  axios
    .get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)
    .then(displayTemp);
  axios
    .get(
      `${apiUrlForecast}lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`
    )
    .then(displayForecast);
}

function displayTemp(response) {
  let icon = response.data.weather[0].icon;
  let newIcon = document.querySelector("#icon");
  newIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );
  let description = response.data.weather[0].description;
  let newDescription = document.querySelector("#description");
  newDescription.innerHTML = description;

  let wind = Math.round(response.data.wind.speed);
  let windNew = document.querySelector("#wind");
  windNew.innerHTML = `${wind} km/h`;
  let humidity = response.data.main.humidity;
  let newHumidity = document.querySelector("#humidity");
  newHumidity.innerHTML = `Humidity: ${humidity} %`;
  city = response.data.name;
  let newCity = document.querySelector("#city");
  newCity.innerHTML = `${city}`;
  let country = response.data.sys.country;
  let currentCity = document.querySelector("#city");
  let currentCountry = document.querySelector("#country");
  currentCity.innerHTML = `${city}`;
  currentCountry.innerHTML = `${country}`;
  let temperature = Math.round(response.data.main.temp);
  let tempNew = document.querySelector("#temper");
  tempNew.innerHTML = `${temperature}°`;

  check();
}

getPosition();

function searchDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  forecastDates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return forecastDates[day];
}

function displayForecast(response) {
  let newDay = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = response.data.daily;
  days.forEach(function (day, index) {
    if (index < 5) {
      let tempMax = Math.round(day.temp.max);
      let tempMin = Math.round(day.temp.min);

      forecastHTML += `<div class="col">
          <div id="day">${searchDay(day.dt)}</div>
          <img id="icon-f" src="http://openweathermap.org/img/wn/${
            day.weather[0].icon
          }@2x.png" />
          <div id="temp-f">${tempMax}° | ${tempMin}°</div>
          <div id="wind-f">Wind: ${day.wind_speed} km/h </div>
          
  `;
    }
    forecastHTML = forecastHTML + `</div>`;
    return newDay;
  });

  newDay.innerHTML = forecastHTML;
}
