const submit = document.getElementById("submit");
const alarmTime = document.getElementById("alarmTime");
const play = document.getElementById("play");
const time1 = new Date();

var audio = new Audio("song.mp3");
play.addEventListener("click", () => {
  audio.play();
});

function displayTime() {
  const currentTime = document.getElementById("currentTime");
  const time = new Date();
  // Changing the innerHTML of the time element from the HTML:
  currentTime.innerHTML =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}

// Setting the eventListener for playing the song on the given time:
submit.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("alarmTime", alarmTime.value);
});

var scheduledAlarm = localStorage.getItem("alarmTime");

// var timeNow;
// setInterval(() => {
//   timeNow = time1.getHours() + ":" + time1.getMinutes();
// }, 1000);

var timeNow =
  time1.getHours() + ":" + time1.getMinutes() + ":" + time1.getSeconds();
console.log(timeNow);
console.log(scheduledAlarm + ":0");
if (timeNow == scheduledAlarm + ":0") {
  // audio.play();
  window.location = "http://youtube.com";
  //   console.log("This is me and what about you right there.");
}
// setInterval(() => {
// console.log(timeNow);
// }, 1000);
// Updating the time every second:
setInterval(displayTime, 1000);
