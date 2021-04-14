function app() {
  const cityName = "Uttarakhand";
  const apiKey = "3687142b3fd145a8edf7c780b0a2ffe0";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(console.log, console.log);
  }
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
app();
