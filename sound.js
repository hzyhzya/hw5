https://editor.p5js.org/hzyhzya/sketches/rVllttAth

var mySound;

function preload() {
  soundFormats("wav");
  mySound = loadSound("#1.wav");
}

function setup() {
  createCanvas(400, 400);
}

var ballx = 50;
var ballSpeed = 3;

var ballx2 =50;
var ballSpeed2 = 5;


function draw() {
  background(220, 50);
  
  fill(255, 204, 0);
  noStroke(); 
  rect(ballx, 100, 50, 50) ;
  
  fill(0, 204, 125);
  noStroke(); 
  rect(ballx2, 200, 50, 50);
  
  ballx = ballx + ballSpeed;
  ballx2 = ballx2 + ballSpeed2;

  if (ballx >= width) {
  ballSpeed = -3;
  }
  
  if (ballx <= 0) {
  ballSpeed = 3;
  }
  
   if (ballx2 >= width) {
  ballSpeed2 = ballSpeed2 * -1;
  }

  if (ballx2 <= 0) {
  ballSpeed2 = ballSpeed2 * -1;
   }
    
  if (ballx >= width) {
  mySound.play();
  }
  
  if (ballx2 <= 0) {
  mySound.play();
  }
}
