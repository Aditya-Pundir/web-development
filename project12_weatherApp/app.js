const seeTemp = document.getElementById("seeTemp");
function app() {
  const cityName = document.getElementById("cityInput").value.toLowerCase();
  const apiKey = "3687142b3fd145a8edf7c780b0a2ffe0";
  let tempUnit = document.getElementById("tempUnit").value;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(console.log, console.log);
  }
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${tempUnit}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("temp").innerText = data.main.temp;
    });
}
// app();

seeTemp.addEventListener("click", () => {
  app();
});
