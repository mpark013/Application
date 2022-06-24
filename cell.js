function Cell(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.block = false;
  this.door = true;
  this.doorNum = 0;
}

Cell.prototype.show = function() {
  fill(100);
  noStroke(); 
  rect(this.x, this.y, this.w, this.w);
  if (this.block) {
    fill(0);
    rect(this.x, this.y, this.w);
  }
  else if (this.door) {
    fill(100);
    rect(this.x, this.y, this.w);
  }
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

