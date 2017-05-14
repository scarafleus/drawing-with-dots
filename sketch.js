var dots = [];
var distan = 20;
var sliderbg;
var colarr = ["red", "green", "blue"];
var temp;
var bdots = [];
var range;
var transparency;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < width / distan; i++) {
    dots[i] = [];
    for (j = 0; j < height / distan; j++) {
      dots[i][j] = new dot(i * distan + distan / 2, j * distan + distan / 2);
    }
  }
  for (i = 0; i < width / distan; i++) {
    bdots[i] = [];
    for (j = 0; j < height / distan; j++) {
      bdots[i][j] = new bdot(i * distan + distan / 2, j * distan + distan / 2);
    }
  }
  sliderbg = createSlider(0,51,51);
  sliderbg.position(20, 20);
  range = createSlider(40, 200, 50);
  range.position(20, 40);
  transparency = createSlider(5, 20, 10);
  transparency.position(20,60);
}

function draw() {
  background(sliderbg.value());

  pointerSphere();

  for (i = 0; i < width / distan; i++) {
    for (j = 0; j < height / distan; j++) {
      bdots[i][j].show();
      //dots[i][j].update();
      bdots[i][j].pointerColor();
      //dots[i][j].applyForce();
    }
  }

  for (i = 0; i < width / distan; i++) {
    for (j = 0; j < height / distan; j++) {
      dots[i][j].show();
      //dots[i][j].update();
      dots[i][j].pointerColor();
      //dots[i][j].applyForce();
    }
  }

  if (mouseIsPressed) {
    for (i = 0; i < width / distan; i++) {
      for (j = 0; j < height / distan; j++) {
        if (dots[i][j].dist < range.value() / 2) {
          if (colarr[0] == "red") {
            dots[i][j].colorr += transparency.value();
          }
          if (colarr[0] == "green") {
            dots[i][j].colorg += transparency.value();
          }
          if (colarr[0] == "blue") {
            dots[i][j].colorb += transparency.value();
          }
        }
      }
    }
  }

}

function pointerSphere() {
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(mouseX, mouseY, range.value(), range.value());
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    temp = colarr[0];
    colarr.splice(0,1);
    append(colarr, temp);
    console.log("your color: " + colarr[0]);
  }
  if (keyCode === DOWN_ARROW) {
    for (i = 0; i < width / distan; i++) {
      for (j = 0; j < height / distan; j++) {
        dots[i][j].colorr = 0;
        dots[i][j].colorg = 0;
        dots[i][j].colorb = 0;
      }
    }
  }
}
