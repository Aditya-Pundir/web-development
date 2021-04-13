var song = document.getElementById("song");
var video = document.getElementById("video");
var playButton = document.getElementById("playButton");

function play() {
  if (song.paused) {
    song.play();
    video.play();
    playButton.innerText = "Pause";
  } else {
    song.pause();
    video.pause();
    playButton.innerText = "Play";
    // song.currentTime = 0;
  }
}
