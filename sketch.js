let x,y,ix,iy;

function setup(){
  createCanvas(500,500);
  noStroke();
}

function draw(){
  x = mouseX;
  y = mouseY;
  ix = width-mouseX;
  iy = height-mouseY;
  
  background(220);
  fill(255,150);
  ellipse(x, x, x, x);
  fill(0,160);
  ellipse(ix, ix, ix, ix);
}