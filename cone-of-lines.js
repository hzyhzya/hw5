function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(250);
  

  for (var i = 20; i <= 380; i = i + 10) {
   line(200, 20, 400-i, 380);
  
  }
}
