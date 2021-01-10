var monkey , monkey_running
var banana ,bananaImage,obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score=0
var survivalTime=0
var ground,bgImage
var gameState="PLAY"
var ground2
function preload(){
  
  bgImage=loadImage("jungle.jpg");

  monkey_running
   =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  } 



function setup() {
  createCanvas(400,400)
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.addImage(bgImage)
ground.x=ground.width/2;
console.log(ground.x);
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1; 
  
ground2=createSprite(200,380,400,20);
  
bananaGroup=createGroup();
obstacleGroup=createGroup();
}


function draw() {
  
  background("teal")
  if(gameState==="PLAY"){
    if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
      score=score+10;
    }
    switch(score){
    case 10:monkey.scale=0.12;
    break;
    case 20:monkey.scale=0.14;
    break;
    case 30:monkey.scale=0.16;
    break;
    case 40:monkey.scale=0.18;
    break;
    }
if(keyDown("space")) {
    monkey.velocityY =-10;
  }
if(obstacleGroup.isTouching(monkey)){
  monkey.scale=0.1;
}
  spawnbanana();
  spawnobstacle();
  monkey.velocityY = monkey.velocityY + 0.8
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  monkey.collide(ground2);
    
  drawSprites();
    stroke("white")
    textSize(20)
    fill("white")
    text("Score:"+score,300,30)
    
    stroke("black")
    textSize(20)
    fill("black")
    survivalTime=Math.ceil(frameCount/frameRate())
    text("Survival Time "+survivalTime,100,50)
    
  }
  
  
  
  if(gameState==="END"){
       ground.velocityX = 0;
      monkey.velocityY = 0;
      obstacleGroup.destroyEach();
      bananaGroup.destroyEach();
    textSize(25);
    fill("yellow")
    stroke("yellow")
 text("GAMEOVER",160,180);
    
  }
}
function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(400,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,350))
    banana.scale = 0.05;
    banana.velocityX = -3;
  
    
    //assigning lifetime to the variable
    banana.lifetime = 200;
    bananaGroup.add(banana)
    
    }
}
function spawnobstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400,340,40,10);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2 ;
    obstacle.velocityX = -3;
  
    
    //assigning lifetime to the variable
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
    
    }
}






