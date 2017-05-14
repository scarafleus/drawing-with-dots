function bdot(x, y) {
this.pos = createVector(x, y);
this.colorr = 0;
this.colorg = 0;
this.colorb = 0;
this.dist;
//this.force = createVector(random(1), random(1));

this.show = function() {
  stroke(this.colorr, this.colorg, this.colorb);
  strokeWeight(8);
  point(this.pos.x, this.pos.y);
}

this.pointerColor = function() {
  this.dist = int(dist(this.pos.x, this.pos.y, mouseX, mouseY));
  if (colarr[0] == "red") {
    this.colorr = map(this.dist, range.value(), 0, 0, 255);
    this.colorg = 0;
    this.colorb = 0;
  } else if (colarr[0] == "green") {
    this.colorg = map(this.dist, range.value(), 0, 0, 255);
    this.colorr = 0;
    this.colorb = 0;
  } else if (colarr[0] == "blue") {
    this.colorb = map(this.dist, range.value(), 0, 0, 255);
    this.colorr = 0;
    this.colorr = 0;
  }

}
}
