
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var PLAY=1;
var gameState=PLAY;
var END=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,400);
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running)  
monkey.scale=0.1;

ground=createSprite(400,350,9000,10);
ground.velocityX=-4;
ground.x=ground.width/2;
  
bananaGroup=createGroup();
rockgroup=createGroup();

  score=0;
  
}


function draw() {
background("white")
monkey.collide(ground); 
  
  
  
 if(gameState===PLAY){
spawnBananas();
spawnRock();
   
if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();
}
   
  if (ground.x < 0){
  ground.x = ground.width/2;
  }
   
  if (keyDown("space")&&monkey.y>=200){
monkey.velocityY=-10;
}
  monkey.velocityY=monkey.velocityY+0.7;
   
  score = score + Math.round(getFrameRate()/60);
  
 }
  
if(gameState===END){
bananaGroup.setVelocityXEach=0;
rockgroup.setVelocityXEach=0;
rockgroup.destroyEach();
bananaGroup.destroyEach();
bananaGroup.setLifetimeEach(-1);
rockgroup.setLifetimeEach(-1);
  ground.velocityX=0;
   fill("red");
  textSize(30);
    text("Gameover",250,150);
  
}
  if(monkey.isTouching(rockgroup)){
   
  
gameState=END
  }
 
fill("black"); 
  textSize(20);
text("SurvivalTime:"+score,250,50);
  
   drawSprites();
  
  
  
  

}


function spawnBananas(){
  if(frameCount % 80===0){
  var banana=createSprite(590,300,20,20);
    banana.y=Math.round(random(50,295));
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.addImage(bananaImage);
    bananaGroup.add(banana);
    bananaGroup.lifetime=300;
  }
}
function spawnRock(){
  if(frameCount % 300===0){
  var rock=createSprite(590,315,30,50)
  rock.scale=0.2;
  rock.velocityX=-3;
  rock.addImage(obstacleImage);
    rockgroup.add(rock);
    rockgroup.lifetime=300;
  }
}









