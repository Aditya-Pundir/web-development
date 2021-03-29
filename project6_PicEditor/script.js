var image = document.querySelector("img");
var controls = document.querySelectorAll("input[type=range]");
var link = document.querySelector("a");
var file = document.querySelector("#file");

function applyFilter() {
  var computedFilters = "";
  controls.forEach(function (item) {
    computedFilters +=
      item.getAttribute("data-filter") +
      "(" +
      item.value +
      item.getAttribute("data-scale") +
      ") ";
  });
  image.style.filter = computedFilters;
  console.log(computedFilters);
}

// FireBase Part:
const database = firebase.database();

// database.ref("imgData/" + 123123).remove();
// database.ref("imgData/" + id).set({
//   name: "Aditya",
// });
