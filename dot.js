function dot(x, y) {
this.pos = createVector(x, y);
this.posOriginal = this.pos;
this.vel = createVector(0, 0);
this.acc = createVector(0, 0);
this.colorr = 0;
this.colorg = 0;
this.colorb = 0;
this.dist;
//this.force = createVector(random(1), random(1));

this.show = function() {
  stroke(this.colorr, this.colorg, this.colorb);
  strokeWeight(6);
  point(this.pos.x, this.pos.y);
}

//this.update = function() {
//  this.vel.add(this.acc);
//  this.acc *= 0;
//  this.pos.add(this.vel);
//}

//this.applyForce = function() {
//  this.acc += this.force;
//  this.force = 0;
//}

this.pointerColor = function() {
  this.dist = int(dist(this.pos.x, this.pos.y, mouseX, mouseY));

  //this.colorr = map(this.dist, 200, 0, 0, 255);
  //this.colorb = map(this.dist, 200, 0, 0, 255);
  //this.colorg = map(this.dist, 200, 0, 0, 255);
  //this.force = 2;
}

}
