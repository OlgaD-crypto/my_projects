function searching(event) {
  event.preventDefault();
  let city = document.querySelector("#city-to-search");
  let newCity = document.querySelector("#city");
  newCity.innerHTML = `${city.value}`;
}

let citySearch = document.querySelector("#city-to-search");
citySearch.addEventListener("search", searching);

let citySearch1 = document.getElementById("button-search");
citySearch1.addEventListener("click", searching);

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

// function temperature

let temper = document.querySelector("#temper");

const rad = document.querySelectorAll('input[type="radio"]');

for (const radio of rad) {
  radio.addEventListener("change", check);
}

// function check() {
//   if (rad[0].checked) {
//     temper.innerHTML = "40/60F";
//   } else temper.innerHTML = "10°/25°C";
// }

function check(event) {
  let target = event.target;
  let message;
  switch (target.id) {
    case "fahrenheit":
      message = "40°/65°F";
      break;
    case "celsius":
      message = "10°/25°C";
      break;
  }
  temper.innerHTML = message;
}
