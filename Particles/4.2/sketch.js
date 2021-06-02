let emitters;
let gravity, wind;

function setup() {
  createCanvas(600, 600);
  emitters = [];
}

function draw() {
  background(0);
  for(const emitter of emitters){
    emitter.emit(5);
    emitter.show();
    emitter.update();
  }
}

function mousePressed(){
  emitters.push(new Emitter(mouseX, mouseY));
}