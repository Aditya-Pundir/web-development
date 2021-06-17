const fileDropper = document.querySelector(".fileDropper");
let img, imgHeight, imgWidth;

fileDropper.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileDropper.classList.add("over");
});
fileDropper.addEventListener("dragleave", (e) => {
  e.preventDefault();
  fileDropper.classList.remove("over");
});

fileDropper.addEventListener("drop", (e) => {
  e.preventDefault();

  const reader = new FileReader();
  reader.readAsDataURL(e.dataTransfer.files[0]);

  reader.onload = function () {
    fileDropper.innerHTML = `<img src=${reader.result} class="img"></img>`;
  };
  fileDropper.classList.remove("over");
});
