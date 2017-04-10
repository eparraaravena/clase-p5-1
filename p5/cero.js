function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(201,45,66);
}

function draw() {
for (var x = 0; x < windowWidth; x+=10) {
  for (var y = 0; y < windowWidth; y+=10) {
  rect (x,y,20,20);
line (x, 20, x, 200);


}
  }
}
