// Grabbing the file input by the user:
let file = document.getElementById("fileInput");
// Grabbing the displayingArea for displaying the text:
let displayingArea = document.getElementById("displayingArea");

// Adding an event listener so that every time the file changes the reader will parse the file again:
file.addEventListener("change", () => {
  // Initiating a FileReader:
  const reader = new FileReader();
  // Adding an onload eventListener that will be executed when the reader has finished parsing the file:
  reader.onload = function () {
    displayingArea.textContent = reader.result;
  };
  // Reading the image file as DataURL:
  reader.readAsDataURL(file.files[0]);
});

// Adding an eventListener for copying the text from textArea:
displayingArea.addEventListener("click", () => {
  // Selecting the text:
  displayingArea.select();
  // Executing the command to copy selected text:
  document.execCommand("copy");
});
