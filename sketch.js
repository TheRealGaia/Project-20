var car, wall;
var speed, weight;

function setup(
speed = random(55, 90)
weight = random(400, 1500)) {

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  car.velocityX = speed;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

if(wall.x - car.x < (car.width + wall.width)/2)
{
  car.velocity = 0;
  var deformation = 0.5*weight*speed*speed/22509;
if(deformation>180)
{
  car.shapeColor = color(17, 214, 197);
}
if(deformation>100 && deformation<180)
{
  car.shapeColor = color(255, 187, 0);
}
if(deformation<100)
car.shapeColor = color(20, 226, 113)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.display();
  wall.display();
}