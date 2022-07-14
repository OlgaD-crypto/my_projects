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

function search(city) {
  axios
    .get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
    .then(displayTemp);
}

function searching(event) {
  event.preventDefault();
  let city = document.querySelector("#city-to-search").value;
  let newCity = document.querySelector("#city");
  newCity.innerHTML = `${city}`;
  search(city);
}

let citySearch = document.querySelector("#city-to-search");
citySearch.addEventListener("search", searching);

let citySearch1 = document.getElementById("button-search");
citySearch1.addEventListener("click", searching);

// searching current position

// let searchPosition = document.querySelector("#location");
// searchPosition.addEventListener("click", getPosition);

function getPosition() {
  navigator.geolocation.getCurrentPosition(currentPosition);
}

function currentPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  axios
    .get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(displayTemp);
}

const rad = document.querySelectorAll('input[type="radio"]');

for (const radio of rad) {
  radio.addEventListener("change", check);
}

function check() {
  if (rad[0].checked) {
    let tempFahr = Math.round((9 / 5) * celsiusTemperature + 32);
    tempNew.innerHTML = `${tempFahr}°F`;
  } else tempNew.innerHTML = `${celsiusTemperature}°C`;
}

let celsiusTemperature;
let tempNew = document.querySelector("#temper");

function displayTemp(response) {
  check();
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
  let city = response.data.name;
  let country = response.data.sys.country;
  let currentCity = document.querySelector("#city");
  let currentCountry = document.querySelector("#country");
  currentCity.innerHTML = `${city}`;
  currentCountry.innerHTML = `${country}`;
  celsiusTemperature = Math.round(response.data.main.temp);
  let temperature = `${celsiusTemperature}`;
  tempNew = document.querySelector("#temper");
  // tempNew.innerHTML = `${temperature}°C`;
  check();
}

getPosition();
// search("Paris");
