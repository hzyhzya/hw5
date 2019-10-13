function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  for (var x = 20; x <= 390; x = x + 20) {
    for(y = 20; y<=390; y= y + 20){
    noStroke()
    ellipse(x, y, 15, 15);}
  }
}
