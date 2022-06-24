class Player {
  
  constructor() {
 
    this.oldx = 0;
    this.oldy = 0;
    this.x = 0;
    this.y = 0;
    this.deltax = 0;
    this.deltay = 0;
  }
  
  update() {
    
    
    this.oldx = this.x;
    this.oldy = this.y;
    
    this.x = this.deltax;
    this.y = this.deltay;
    
    if(this.x === 760) {
      this.deltax = 540;
    } else if (this.x === 0) {
      this.deltax = 80;
    }
    if(this.y === 760) {
      this.deltay = 540;
    } else if (this.y === 40) {
      this.deltay = 80;
    }
  }
  
  show() {
    fill(0);
    rect(this.x,this.y,20,20);
  }
  
  controls() {
    //arrow keys
    if (keyIsDown(RIGHT_ARROW)) {
      player.deltax += 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
      player.deltax -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.deltay += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      player.deltay -= 5;
    }
    //wasd controls
    if (keyIsDown(68)) {
      player.deltax += 20;
      gamer = true;
    }
    if (keyIsDown(65)) {
      player.deltax -= 20;
      gamer = true;
    }
    if (keyIsDown(83)) {
      player.deltay += 20;
      gamer = true;
    }
    if (keyIsDown(87)) {
      player.deltay -= 20;
      gamer = true;
    }
  }
}