class Particle extends p5.Vector{
  constructor(x,y,fw, c){
    super(x,y);
    
    this.firework = fw;
    
    if(this.firework){
      this.vel = createVector(0, random(-12, -8));
    }else{
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 8));
    }
    
    this.acc = createVector(0, 0);
    
    this.color = c;
    
    this.lifetime = 255;
  }
  
  applyForce(force){
    this.acc.add(force);
  }
  
  update(){
    if(!this.firework){
      this.vel.mult(0.9);
      this.lifetime -= 4;
    }
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.mult(0);
  }
  
  show(){
    colorMode(HSB);
    if(!this.firework){
      strokeWeight(3);
      stroke(this.color, 255, 255, this.lifetime); 
    }else{
      strokeWeight(5);
       
    }
    point(this.x, this.y);
  }
  
  finished(){
    return this.lifetime < 0;
  }
  
}