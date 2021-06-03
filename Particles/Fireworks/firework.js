class Firework{
  
  constructor(){
    this.firework = new Particle(random(width), height, true, this.color);
    
    this.particles = [];
    this.exploded = false;
    this.color = random(255);
  }
  
  update(){
    if(!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();
      
      if(this.firework.vel.y >= 0){
        this.explode();
        this.exploded = true;
      }
    }
    
    for(let x = this.particles.length - 1; 
       x >= 0; x--){
      this.particles[x].applyForce(gravity);
      this.particles[x].update();
      if(this.particles[x].finished()){
        this.particles.splice(x, 1);
      }
    }
  }
  
  show(){
    if(!this.exploded){
      this.firework.show(); 
    }
    for(const particle of this.particles){
      particle.show();
    }
  }
  
  explode(){
    for(let x = 0; x < 100; x++){
      var p = new Particle(this.firework.x, this.firework.y, false, this.color);
      this.particles.push(p);
    }
  }
  
  finished(){
    return this.exploded && this.particles.length == 0;
  }
}