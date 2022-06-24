let player, grid, world, worldFlag;
var cols, rows;
var w = 80;
interest = 0;
let curious, interested, gamer, investigative, dedicated, careful = false;
let displayText = 'test';
let playing = false;
let vid;
let record = [];


function preload() {
  golGif = loadImage("GoL.gif");
  goGif = loadImage("go.gif");
  kaopic = loadImage("set.gif");
  website = loadImage("website.jpg");
}
function setup() {
  //NES GRAPHICS
  createCanvas(802, 802);
  frameRate(16);
  cols = floor(width / w);
  rows = floor(height / w);
  world = new World();
  grid = world.make2DArray(cols, rows);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }

  player = new Player();
  player.deltax = 400;
  player.deltay = 400;
  world.firstWorld();
}

function draw() {
  //SHOW GRID
  background(255);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }

  //SHOW WORLD

  world.checkWorld();
  world.secrets();
  player.controls();
  player.update();
  player.show();
}