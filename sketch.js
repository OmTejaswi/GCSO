var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(40,200);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  
  car.velocityX = speed;

  wall = createSprite(width/2+400,200,40,height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background("black");  
  deform();
  drawSprites();
}