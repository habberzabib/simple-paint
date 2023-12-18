//Animation Intro

//Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Global Variables
let mousePressed = false;
let mouseX, mouseY, pMouseX, pMouseY;
let size = 5;
let penColor = "black";

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  //Update Variables

  //Draw circle if mousePressed
  if (mousePressed) {
    // ctx.fillStyle = penColor;
    // ctx.beginPath();
    // ctx.arc(mouseX, mouseY, size, 0, 2 * Math.PI);
    // ctx.fill();
    ctx.strokeStyle = penColor;
    ctx.lineCap = "round";
    ctx.lineWidth = size;
    ctx.beginPath();
    ctx.moveTo(pMouseX, pMouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }

  requestAnimationFrame(loop);
}

//EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler() {
  mousePressed = true;
}

function mouseupHandler() {
  mousePressed = false;
}

function mousemoveHandler(event) {
  pMouseX = mouseX;
  pMouseY = mouseY;

  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
  if (event.code == "Space") {
    //Draw bg
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown" && size > 2) {
    size--;
  } else if (event.code == "Digit1") {
    penColor = "red";
  } else if (event.code == "Digit2") {
    penColor = "orange";
  } else if (event.code == "Digit3") {
    penColor = "yellow";
  } else if (event.code == "Digit4") {
    penColor = "green";
  } else if (event.code == "Digit5") {
    penColor = "blue";
  } else if (event.code == "Digit6") {
    penColor = "purple";
  } else if (event.code == "Digit7") {
    penColor = "pink";
  } else if (event.code == "Digit8") {
    penColor = "brown";
  } else if (event.code == "Digit9") {
    penColor = "black";
  } else if (event.code == "Digit0") {
    penColor = "white";
  }
}

//Btn Events
document.getElementById("red").addEventListener("click", setRed);
document.getElementById("orange").addEventListener("click", setOrange);
document.getElementById("yellow").addEventListener("click", setYellow);
document.getElementById("green").addEventListener("click", setGreen);
document.getElementById("blue").addEventListener("click", setBlue);
document.getElementById("purple").addEventListener("click", setPurple);
document.getElementById("pink").addEventListener("click", setPink);
document.getElementById("brown").addEventListener("click", setBrown);
document.getElementById("black").addEventListener("click", setBlack);
document.getElementById("erase").addEventListener("click", setErase);

function setRed() {
  penColor = "red";
}

function setOrange() {
  penColor = "orange";
}
function setYellow() {
  penColor = "yellow";
}
function setGreen() {
  penColor = "green";
}
function setBlue() {
  penColor = "blue";
}
function setPurple() {
  penColor = "purple";
}
function setPink() {
  penColor = "pink";
}
function setBrown() {
  penColor = "brown";
}
function setBlack() {
  penColor = "black";
}
function setErase() {
  penColor = "white";
}
