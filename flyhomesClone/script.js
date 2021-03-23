const sellBtn = document.getElementById("sellBtn");
const buyBtn = document.getElementById("buyBtn");
const userLocation = navigator.geolocation;

sellBtn.addEventListener("click", () => {
  database.ref("data/" + UserId).on("value", (snapshot) => {
    alert("Username in the database is: " + snapshot.val().Username);
  });
});

userLocation.getCurrentPosition((position) => {
  const userLocationLatitude = position.coords.latitude;
  const userLocationLongitude = position.coords.longitude;
});

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
