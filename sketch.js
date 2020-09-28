var bullet,bullet1,bullet2,speed,speed1,speed2,weight1,weight2,weight;
var wall,thickness,thickness2;


function setup() {
  
 createCanvas(1600,400);

  bullet=createSprite(50, 50, 50, 50);
  bullet1=createSprite(50,250, 50, 50);
  bullet2=createSprite(50,150, 50, 50);
   wall=createSprite(1000,100,thickness,height);
  wall.shapeColor="black";
  bullet.shapeColor="blue";
  bullet1.shapeColor="blue";
  bullet2.shapeColor="blue";
   speed=random(50,53);
   speed1=random(70,75);
   speed2=random(10,15);
   weight=random(40,50);
   weight1=random(90,100);
   weight2=random(16,17);
   thickness=random(22,23);
   thickness2=random(12,10);
 bullet.velocityX=speed;
 bullet1.velocityX=speed1;
 bullet2.velocityX=speed2;
 }


  

function draw() {
  background("yellow"); 
  if (bullet.x-wall.x>bullet.width/2+wall.width/2) {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness2*thickness2*thickness2);
    if(damage<10) {
      bullet.shapeColor="green";
    }
    
    if(damage>10) {
      bullet.shapeColor="red";
    }

  }else {
bullet.shapeColor="blue";

  }


if (bullet1.x-wall.x>bullet1.width/2+wall.width/2) {
  bullet1.velocityX=0;
  var damage=0.5*weight1*speed1*speed1/(thickness*thickness*thickness);
  if(damage<10) {
    bullet1.shapeColor="green";
  }
 
  if(damage>10) {
    bullet1.shapeColor="red";
  }

 }else {
  bullet1.shapeColor="blue";
  
  }
  if (bullet2.x-wall.x>bullet2.width/2+wall.width/2) {
     bullet2.velocityX=0;
     var damage=0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2);
    if(damage<10) {
      bullet2.shapeColor="green";
    }
    
    if(damage>10) {
      bullet2.shapeColor="red";
    }

    
    
      }else {
    bullet2.shapeColor="blue";
    
    }


drawSprites();
}