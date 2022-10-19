let pursuer, target;

function setup() {
  createCanvas(800, 800);
  pursuer = new Vehicle(100, 100);
  target = new Target(200, 100);
}

function draw() {
  background(0);
  
  let pursuerSteering = pursuer.seek(target.pos);
  pursuer.applyForce(pursuerSteering);
  pursuer.update();
  pursuer.edges();
  pursuer.show();
  
  target.update();
  target.edges();
  target.show();
  
  let d = p5.Vector.dist(pursuer.pos, target.pos);
  if( d < pursuer.r + target.r) {
    target = new Target(random(width), random(height));
  }
}