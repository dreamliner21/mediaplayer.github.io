// Kode JavaScript yang telah diberikan sebelumnya

var fileInput = document.getElementById("fileInput");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");
var loadingElement = document.getElementById("loading");
var mediaElement = document.createElement(fileInput.files[0].type.startsWith("audio") ? "audio" : "video");
mediaElement.controls = true;
document.querySelector(".player").appendChild(mediaElement);

fileInput.addEventListener("change", function(e) {
  // Kode event listener change
});

playBtn.addEventListener("click", function() {
  // Kode event listener click playBtn
});

pauseBtn.addEventListener("click", function() {
  // Kode event listener click pauseBtn
});

stopBtn.addEventListener("click", function() {
  // Kode event listener click stopBtn
});

fileInput.addEventListener("change", function(e) {
  var file = fileInput.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onloadstart = function() {
      loadingElement.style.display = "block";
    }

    reader.onload = function(e) {
      mediaElement.src = e.target.result;
      loadingElement.style.display = "none";
      playBtn.disabled = false;
      pauseBtn.disabled = false;
      stopBtn.disabled = false;
    }

    reader.readAsDataURL(file);
  }
});

playBtn.addEventListener("click", function() {
  mediaElement.play();
});

pauseBtn.addEventListener("click", function() {
  mediaElement.pause();
});

stopBtn.addEventListener("click", function() {
  mediaElement.pause();
  mediaElement.currentTime = 0;
});
