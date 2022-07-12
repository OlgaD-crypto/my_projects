// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

function isWindy(speed, unit) {
  return speed > 5 && unit === metric;
}

let wind = prompt("Enter the speed");
let mesure = prompt("Imperial or metric?");

if (isWindy(wind, mesure)) {
  alert("It is windy");
} else {
  alert("It is not windy");
}

// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true

let now = new Date();
console.log(now);

console.log(now.getMilliseconds());
console.log(now.getDate());
console.log(now.getMinutes());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
let week = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
let day = week[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
console.log(`Today is ${day}, ${month} ${date}, ${year} `);

function formatDate() {
  let week = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
  let day = week[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();

  return `Today is ${day}, ${month} ${date}, ${year} `;
}

console.log(formatDate(new Date()));
