var fileInput = document.getElementById("fileInput");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");

var mediaElement = document.createElement(fileInput.files[0].type.startsWith("audio") ? "audio" : "video");
mediaElement.controls = true;

fileInput.addEventListener("change", function() {
    var file = fileInput.files[0];
    
    var objectURL = URL.createObjectURL(file);
    mediaElement.src = objectURL;

    mediaElement.addEventListener("loadedmetadata", function() {
        playBtn.disabled = false;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
    });
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

document.querySelector(".player").appendChild(mediaElement);
