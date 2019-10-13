function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  var x = []; 
  var y = []; 
}

function draw() {
  background(250);
  

  for (var i = 30; i <= 380; i = i + 10) {
    ellipse(200, 200, 400-i, 400-i);
  }
}
