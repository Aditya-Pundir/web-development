document.getElementById("mainButton").addEventListener("click", (record) => {
  document.getElementById("endButton").style.display = "block";
  var selection = document.getElementById("languageSelector").value;
  var recognition = new webkitSpeechRecognition() || window.SpeechRecognition; // We can also use window.SpeechRecognition() instead of webkitSpeechRecognition()
  recognition.lang = selection;
  recognition.continuous = true;
  recognition.onresult = function (event) {
    const resultIndex = event.resultIndex;
    document.getElementById("speechToText").innerText +=
      " " + event.results[resultIndex][0].transcript;
  };

  recognition.start();
});
document.getElementById("endButton").addEventListener("click", (endRecord) => {
  location.reload();
});
