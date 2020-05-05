var movingRect, fixedRect;
var movingRect1, fixedRect1;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(200,200,50,80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  
  gameObject1=createSprite(100,200,50,50);
  gameObject1.shapeColor="green";

  gameObject2=createSprite(200,200,50,50);
  gameObject2.shapeColor="green";

  gameObject3=createSprite(300,200,50,50);
  gameObject3.shapeColor="green";

  gameObject4=createSprite(400,200,50,50);
  gameObject4.shapeColor="green";

  movingRect1=createSprite(600,800,80,30);
  movingRect1.shapeColor="blue";
  movingRect1.velocityY=-5;

  fixedRect1=createSprite(600,100,50,80);
  fixedRect1.shapeColor="blue";
  fixedRect1.velocityY=5;
}

function draw() {
  background("black");
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(gameObject1,movingRect)){

  movingRect.shapeColor="red";
  gameObject1.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green";
}


bounceOff(movingRect1,fixedRect1);

  


  drawSprites();
}

