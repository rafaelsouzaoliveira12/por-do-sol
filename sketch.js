let positionVertical;

function setup() {
  createCanvas(500, 500);
  positionVertical = 250;
}

function draw() {
  if (positionVertical < 400) {
    background("lightblue");
    positionVertical = positionVertical + 1;
  }
  fill("yellow");
  background;
  circle(250, positionVertical, 300);
  fill("#2007FF");
  rect(0, 250, 500, 350);
  fill("#FFC107");
  rect(0, 400, 500, 100);
}
