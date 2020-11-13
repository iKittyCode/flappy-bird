function Bird() {

  this.y = height / 2;
this.x = 64
  
this.gravity = 0.6;
this.velocity = 0;
this.lift = -15
this.show = function() {
fill(255);
image(img,this.x, this.y, 100, 100);


}
this.up = function() {
this.velocity += this.lift 

}
this.update = function() {
  print(this.velocity);
  
this.velocity += this.gravity
  this.velocity *= 0.9
this.y += this.velocity;
if (this.y > height) {
this.y = height;
this.velocity = 0;

}
if (this.y < 0) {
this.y = 0;
this.velocity = 0;

}

}



}