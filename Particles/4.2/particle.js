class Particle{
  constructor(x, y){
    // Spawning position
    this.pos = createVector(x,y);
    
    // Velocity
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    
    // Acceleration starts as 0
    this.acc = createVector(0, 0);
    
    // Particle Size
    this.r = 4;
    
    // This decides if it's a rectangle or a circle
    this.e = random(0, 1);
    
    // Particle Colors
    this.colorR = random(0, 255);
    this.colorG = random(0, 255);
    this.colorB = random(0, 255);
    
    this.lifetime = 255;
  }
  
  // To add external forces such as gravity and wind
  applyForce(force){
    this.acc.add(force);
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    
    // Decreases lifetime to despawn older particles
    this.lifetime -= 4;
  }
  
  show(){
    // Outline the shape
    noStroke();
    
    // Paint the shape
    fill(this.colorR,
           this.colorG,
           this.colorB,
           this.lifetime);
    
    // Draw a Circle
    if(this.e > 0.5){
      ellipse(this.pos.x, this.pos.y, this.r * 2);  
    }
    // Draw a Square
    else{
      rectMode(CENTER);
      push();
        translate(this.pos.x, this.pos.y);
        rotate(90);
        rect(0, 0, this.r*2);
      pop();
    }
    
  }
  
  // To "Despawn" the shape
  finished(){
    return this.lifetime < 0;
  }
}