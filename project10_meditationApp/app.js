var song = document.getElementById("song");
var video = document.getElementById("video");
var playButton = document.getElementById("playButton");

function play() {
  if (song.paused) {
    song.play();
    video.play();
    playButton.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  } else {
    song.pause();
    video.pause();
    playButton.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
    // song.currentTime = 0;
  }
}
