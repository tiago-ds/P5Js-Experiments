let fireworks;
let gravity;

function setup() {
  createCanvas(900, 768);
  
  fireworks = [];
  
  gravity = createVector(0, 0.2);
}

function draw() {
  colorMode(RGB);
  background(0, 50);
  
  if(random(1) < 0.02){
    fireworks.push(new Firework());
  }
  
  for(let x = fireworks.length - 1; x >= 0; x--){
    fireworks[x].update();
    fireworks[x].show();
    if(fireworks[x].finished()){
      fireworks.splice(x, 1);
    }
  }
}