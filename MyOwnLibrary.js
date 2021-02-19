function isTouch(name1,name2)
{
  if(name1.x-name2.x < name1.width/2+name2.width/2 &&
    name2.x-name1.x<name2.width/2+name1.width/2 && 
    name2.y - name1.y < name2.height/2 + name1.height/2 && 
    name1.y-name2.y < name1.height/2 + name2.height/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}
function bounce (name3, name4){
  if(name3.x-name4.x < name3.width/2+name4.width/2 &&
    name4.x-name3.x<name3.width/2+name4.width/2) {
      name3.velocityX=name3.velocityX * (-1);
      name4.velocityX=name4.velocityX * (-1)
    }
  
    if (name3.y - name4.y < name3.height/2 + name4.height/2 && 
      name4.y-name3.y < name4.height/2 + name3.height/2) {
        name3.velocityY=name3.velocityY * (-1)
        name4.velocityY=name4.velocityY * (-1)
    }
}