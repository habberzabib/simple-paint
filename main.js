//Animation Intro

//Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Global Variables
let mousePressed = false;
let mouseX, mouseY;
let size = 5;
let penColor = "black";

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  //Update Variables

  //Draw circle if mousePressed
  if (mousePressed) {
    ctx.fillStyle = penColor;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, size, 0, 2 * Math.PI);
    ctx.fill();
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
  } else if (event.code == "ArrowDown") {
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
