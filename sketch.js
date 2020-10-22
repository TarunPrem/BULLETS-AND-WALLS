//creating objects
var fixedRect, movingRect;
var object1, object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  //creating objects and its functions
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100, 200, 50, 80);
  object2 = createSprite(200, 400, 50, 80);
  object3 = createSprite(300, 200, 50, 80);
  object4 = createSprite(400, 400, 50, 80);
  object1.velocityX = 3;
  
}
    
function draw()
 {
  background(0,0,0); 
  //giving velocity 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(object1,object3))
  {
    object3.shapeColor = "blue";
    object1.shapeColor = "blue";

  }
  else
  {
    object3.shapeColor = "green";
    object1.shapeColor = "green";
    
  }
//making objects bounce
  bounceOff(object1,object3);
  
  drawSprites();
}

