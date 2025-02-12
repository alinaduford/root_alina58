let btn = document.querySelector("button");
const panel = document.getElementById("panel");
const sound = new Audio("sounds/pixel-sound.mp3");

panel.onclick = function() {
    this.classList.toggle("slide-up");
    sound.play();
}