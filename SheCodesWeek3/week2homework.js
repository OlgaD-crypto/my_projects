let city = prompt("Enter Your city here");
let newCity = "";

function cityTransform() {
  let splitName = city.split(" ");
  console.log(splitName);
  let devidedCity = splitName.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  console.log(devidedCity);

  return (newCity = devidedCity.join(" "));
}
cityTransform(city);
console.log(newCity);

let weather = [
  { name: "Paris", temp: 19.7, humidity: 80 },
  { name: "Tokyo", temp: 17.3, humidity: 50 },
  {
    name: "Lisbon",
    temp: 30.2,
    humidity: 20,
  },
  { name: "San Francisco", temp: 20.9, humidity: 100 },
  { name: "Oslo", temp: -5, humidity: 20 },
];

// function CtoF(celsius) {
//   let cTemp = celsius;
//   cFahr = (cTemp * 9) / 5 + 32;
//   const message = `${cTemp} is ${cFahr.toFixed(1)} F`;
//   console.log(message);
//   return cFahr;
// }

let j = 0;

weather.forEach((element) => {
  if (element.name === newCity) {
    console.log(element.name);
    // CtoF(element.temp);
    // console.log(cFahr);
    let cFahr = (element.temp * 9) / 5 + 32;
    alert(
      `It is currently ${element.temp}°C (${cFahr.toFixed(1)}°F) in ${
        element.name
      } with a humidity of ${element.humidity}%`
    );
    j++;
  }
});

if (j === 0) {
  console.log(j);
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${newCity}`
  );
}
