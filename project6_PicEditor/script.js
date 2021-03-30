var image = document.getElementById("userImage");
var controls = document.querySelectorAll("input[type=range]");
var userFile = document.getElementById("fileInput");

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

userFile.addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("userImage", reader.result);
    image.setAttribute("src", localStorage.getItem("userImage"));
  });
  //   userFile.addEventListener("drop", () => {
  //     localStorage.setItem("userImage", reader.result);
  //   });

  reader.readAsDataURL(this.files[0]);
});

// controls.forEach((element) => {
//   element.addEventListener("change", function () {
//     image.setAttribute("src", localStorage.getItem("userImage"));
//   });
// });
// userFile.addEventListener("drop", function () {
//   image.setAttribute("src", localStorage.getItem("userImage"));
// });
