var bird;
var pipes = [];
var score = 0;
function setup() {
  createCanvas(400, 500);
  bird = new Bird();
  pipes.push(new Pipe());
}
function draw() {
background(0);
for (var i = pipes.length - 1; i >= 0; i--) { pipes[i].show();
pipes[i].update();
if (pipes[i].hits(bird)) {
noLoop();
background(0, 78, 56);
  textSize(56);
text("game over", 78, 78 )
text("score is " + score, 40, 40)

}                                     
if(pipes[i].offscreen()) {
pipes.splice(i, 1);
  score++
}
}
bird.update();
bird.show();
if (frameCount % 100  == 0) {
pipes.push(new Pipe());
}
}
function keyPressed() {
if (key == ' ') {
bird.up();
}  
}