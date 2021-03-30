var image = document.getElementById("userImage");
var controls = document.querySelectorAll("input[type=range]");
var userFile = document.getElementById("fileInput");
var downloadableImage = document.getElementById("downloadableImage");
var downloadLink = document.getElementById("downloadLink");

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
  downloadableImage.style.filter = computedFilters;
}

userFile.addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("userImage", reader.result);
    image.setAttribute("src", localStorage.getItem("userImage"));
    downloadableImage.setAttribute("src", reader.result);
    downloadLink.setAttribute("href", localStorage.getItem("userImage"));
  });
  reader.readAsDataURL(this.files[0]);
});

// function download() {}
// download();
