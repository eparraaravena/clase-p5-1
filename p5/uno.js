function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);
  noLoop()

}

function draw() {
  for (var x = 0; x < windowWidth; x+=(windowWidth/25)) {
    colorMode(HSB);
    fill(200,x/25,255);
    ellipseMode(CENTER);
    ellipse(x, windowHeight/4, 60, 60);
  }
}
