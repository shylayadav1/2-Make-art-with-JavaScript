// JavaScript animation with p5 library

// initialize coordinates
var xCoord = 0;
var yCoord = 0;

// we make the background several times, so we encapsulate that behavior in a function
function makeBackground() {
  background(random(255), random(255), random(255));
}

// setup() runs once when the page loads
// p5 calls this function
function setup() {
  createCanvas(800, 800); // make canvas 800px by 800px
  makeBackground();
}

// draw() runs forever on a loop
// p5 calls this function
function draw() {
  fill(random(255), random(255), random(255))
  ellipse(xCoord, yCoord, 50, 50);
  xCoord = xCoord + 20;

  if (xCoord > width) {
    yCoord = yCoord + 120;
    xCoord = 0;
  }

  if (yCoord > height) {
    noLoop();
  }

  // log coordinates to console for debugging
  console.log(`x: ${xCoord} y: ${yCoord}`);
}

// add interactive behavior with mouse
// p5 calls this function
function mousePressed() {
  clear();
  makeBackground();
  fill(random(255), random(255), random(255))
  ellipse(mouseX, mouseY, 40, 40);
}