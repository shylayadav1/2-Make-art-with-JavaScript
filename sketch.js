var x = 0;
var y = 0;

// setup() runs once when the page first loads
function setup() {
  // remove fill
  noFill();

  // create canvas of size 800 x 800
  createCanvas(800, 800); // origin is in upper left corner

  // set background color

}

// draw() runs on a loop and happens many times
function draw() {
  ellipse(x, y, 20)
  x = x + 5;

  if (x > width) {
      y = y + 100;
      x = 0;
    }

  if (y > height) {
      noLoop();
    }

  console.log(`x: ${x} y:${y}`);
}

function mousePressed() {
  clear();
  makeBackground();
  fill(Math.random()*255, Math.random()*255, Math.random()*255)
  ellipse(mouseX, mouseY, 40, 40);
}

function makeBackground() {
  background(0, 200, 200); // choose your own values from 0 to 255
}