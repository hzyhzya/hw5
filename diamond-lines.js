function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 10) {
    line(200, i, 200+i, i);
  }
  
   for (var i = 10; i <= 200; i = i + 10) {
    line(200, i, 200-i, i);
  }
  
  for (var i = 10; i <= 200; i = i + 10) {
    line(200, 400-i, 200+i, 400-i);
  }
  
  for (var i = 10; i <= 200; i = i + 10) {
    line(200, 400-i, 200-i, 400-i);
  }
 }
