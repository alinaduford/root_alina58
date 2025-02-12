console.log("🦩Loaded🦩");

const myFlamingo = document.getElementById("flamingo");

const sound = new Audio("sounds/move-sound.mp3");
const sound2 = new Audio("sounds/bckrnd-music.mp3");

const stage = document.querySelector("body");

myFlamingo.onclick = function () {
    this.classList.toggle("move");
    sound.play();
    sound2.play();
}

document.addEventListener("click", function (event) {
    console.log(event.clientX + ":" + event.clientY);

    var coords = `translateX(${event.clientX - 150}px) translateY(${event.clientY - 177}px)`;
    myFlamingo.style.transform = coords;
});

document.onkeydown = function checkKeys(event) {
    var style = window.getComputedStyle(myFlamingo);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;
    var coords;

    if (event.key === "ArrowLeft") { // Move left
        coords = `translateX(${xVal - 200}px) translateY(${yVal}px)`;
        myFlamingo.style.transform = coords;
    }
    if (event.key === "ArrowUp") { // Move up
        coords = `translateX(${xVal}px) translateY(${yVal - 200}px)`;
        myFlamingo.style.transform = coords;
    }
    if (event.key === "ArrowRight") { // Move right
        coords = `translateX(${xVal + 200}px) translateY(${yVal}px)`;
        myFlamingo.style.transform = coords;
    }
    if (event.key === "ArrowDown") { // Move down
        coords = `translateX(${xVal}px) translateY(${yVal + 200}px)`;
        myFlamingo.style.transform = coords;
    }
}

let myObject;
function addMyObject() {
    /* Custom Object */
    myObject = document.createElement("img");
    myObject.src = "shrimp.svg";
    stage.append(myObject);
    //myObject.style.width =  "200px";
    stage.append(myObject);
    // read window's available width & height in px
    let w = window.innerWidth - 64;
    let h = window.innerHeight - 49;
    // randomize new X & Y numbers within space limits
    let randomX = Math.floor((Math.random() * w) + 1);
    let randomY = Math.floor((Math.random() * h) + 1);


    myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`

    setTimeout(() => { myObject.remove(); addMyObject(); }, 3000);

}

    addMyObject();

/**
 * Game update loop
 */

let characterCoordX;
let characterCoordY;
let objectCoordX;
let objectCoordY;


setInterval(() => {
    // console.log("update loop is running")
    characterCoordX = myFlamingo.getBoundingClientRect().x;
    characterCoordY = myFlamingo.getBoundingClientRect().y;

    //optional: move character coordinates to its center
    characterCoordX += 150; 
    //half the width of the character
    characterCoordY += 177;
    //half the height of the character
    objectCoordX = myObject.getBoundingClientRect().x;
    objectCoordY = myObject.getBoundingClientRect().y;

    if ((characterCoordX >= objectCoordX && characterCoordX <= objectCoordX + myObject.width)
    && (characterCoordY >= objectCoordY && characterCoordY <= objectCoordY + myObject.height))
{
    console.log("Hit!");
    objectAction();
}
}, 50);

const bingSound = new Audio ("sounds/giggle.mp3");
function objectAction() {
    myFlamingo.classList.add("happy");
    setTimeout(() => {
        MediaQueryListEvent.classList.remove("happy");
    }, 1000);
    myObject.remove();
    bingSound.play();
}