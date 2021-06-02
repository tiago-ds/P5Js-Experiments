class Emitter{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.particles = [];
  }
  
  emit(num){
    for(let x = 0; x < num; x++){
      let nX = this.pos.x + random(-10, 10);
      let nY = this.pos.y + random(-10, 10);
      this.particles.push(new Particle(nX, nY));
    }
  }
  
  show(){
    for(const particle of this.particles){
      particle.show();
    }
  }
  
  update(){
    
    for(const particle of this.particles){
      particle.applyForce(createVector(0, 0.2));
      particle.update();
    }
    
    for(let i = this.particles.length - 1; i >= 0; i--){
      if(this.particles[i].finished()){
        this.particles.splice(i, 1);
      }
    }
    
  }
  
  
}