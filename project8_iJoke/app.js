var listContainer = document.getElementById("listContainer");
var clickSound = new Audio();
clickSound.src = "click.mp3";
function fetchData() {
  fetch(`https://icanhazdadjoke.com/slack`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      listContainer.innerHTML += `<li class="list">${data.attachments[0].text}</li>`;
      clickSound.play();
    });
}
