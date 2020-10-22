function isTouching(objectA,objectB)
{
  if (objectA.x - objectB.x <= objectB.width/2 + objectA.width/2
    && objectB.x - objectA.x <= objectB.width/2 + objectA.width/2
    && objectA.y - objectB.y <= objectB.height/2 + objectA.height/2
    && objectB.y - objectA.y <= objectB.height/2 + objectA.height/2) 
  {
   return true;
}
else {
  return false;
}

}

function bounceOff(objectA,objectB)
{
  if (objectA.x - objectB.x < objectB.width/2 + objectA.width/2
    && objectB.x - objectA.x < objectB.width/2 + objectA.width/2)
    
  {

    objectA.velocityX = (-1) * objectA.velocityX
}
if ( objectA.y - objectB.y < objectB.height/2 + objectA.height/2
  && objectB.y - objectA.y < objectB.height/2 + objectA.height/2)
{

  objectA.velocityY = (-1)* objectA.velocityY
  
}

}