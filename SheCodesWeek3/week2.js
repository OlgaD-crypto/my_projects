let weather = {};
console.log(weather);
weather.temp = 20;
weather.humidity = 40;
console.log(weather.temp + ";" + weather.humidity);
weather.windSpeed = 10;
console.log(weather.windSpeed);

let forecast = [];

function Forecast(day, humidity, temp) {
  this.day = day;
  this.humidity = humidity;
  this.temperature = temp;
  forecast.push(this);
  this.displayWeather = () => {
    console.log(
      `${day}` +
        " humidity is " +
        `${humidity}` +
        " and the temperature is " +
        `${temp}` +
        " degrees"
    );
  };
}
let day1 = new Forecast("Monday", 40, 23);
let day2 = new Forecast("Tuesday", 50, 24);
let day3 = new Forecast("Wednesday", 60, 23);
let day4 = new Forecast("Thursday", 70, 23);
console.log(Forecast);
console.log(day4);

console.log(forecast);

forecast.forEach((day) => {
  day.displayWeather();
});

let cities = [
  {
    name: "Paris",
    country: "France",
    language: "French",
    temperature: 18,
    capitalCity: true,
  },
  {
    name: "Sidney",
    country: "Australia",
    language: "english",
    temperature: 34,
    capitalCity: true,
  },
  {
    name: "New York",
    country: "USA",
    language: "english",
    temperature: 28,
    capitalCity: false,
  },
];
console.log(cities[2].name);

const logArrayElements = (city) => {
  console.log(`In ${city.name} the temperature is ${city.temperature}`);
};

cities.forEach(logArrayElements);

// cities.forEach((city) => {
//   console.log(city.country);
// }); another variant to do actions above
