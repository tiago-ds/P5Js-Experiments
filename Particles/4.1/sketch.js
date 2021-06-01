let particles;
let gravity, wind;

function setup() {
  createCanvas(600, 600);
  gravity = createVector(0, 0.2);
  wind = createVector(0.05, 0);
  
  particles = [];
}

function draw() {
  background(0);
  
  for(let x = 0; x < 3; x++){
    if(mouseIsPressed){
      particles.push(new Particula(mouseX + random(-10, 10), mouseY)); 
    }   
  }
  
  for(const particle of particles){
    particle.applyForce(gravity);
    //particle.applyForce(wind);
    particle.update();
    particle.show();  
  }
    
  // To despawn the shape
  for(let i = particles.length - 1; i >= 0; i--){
    if(particles[i].finished()){
      particles.splice(i, 1);
    }
  }
  
}