const sellBtn = document.getElementById("sellBtn");
const buyBtn = document.getElementById("buyBtn");
const userLocation = navigator.geolocation;
let userLocationLongitude;
let userLocationLatitude;
sellBtn.addEventListener("click", () => {
  database.ref("data/" + UserId).on("value", (snapshot) => {
    alert("Username in the database is: " + snapshot.val().Username);
  });
});

userLocation.getCurrentPosition((position) => {
  userLocationLatitude = position.coords.latitude;
  userLocationLongitude = position.coords.longitude;
});

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
