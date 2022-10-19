let vehicle, vehicle2;
let target;

function setup() {
  createCanvas(400, 400);
  vehicle = new Vehicle(100, 100);
}

function draw() {
  background(0);
  fill(255, 0, 0);
  noStroke();
  
  target = createVector(mouseX, mouseY);
  circle(target.x, target.y, 16);
  
  vehicle.live();
}