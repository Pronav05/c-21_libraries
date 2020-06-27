var movingRect, fixedRect;
var gameObject1, gameObject2;
var object1, object2;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(700, 200, 50, 50);
  fixedRect = createSprite(200, 200, 50, 50);

  gameObject1 = createSprite(100, 300, 50, 50);
  gameObject2 = createSprite(650, 300, 50, 50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";

  gameObject1.velocityX = 10;
  gameObject2.velocityX = -5;
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  bounceOff(gameObject1, gameObject2);

  drawSprites();
}
