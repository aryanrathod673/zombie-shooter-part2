var bg,bgImg;
var player, shooterImg, shooter_shooting,heart1Img,heart2Img,heart3Img,zombieImg,heart1,heart2,heart3;
var zombie;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  bgImg = loadImage("assets/bg.jpeg");
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");
  zombieImg = loadImage("assets/zombie.png");

}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg)
bg.scale = 1.1
  
//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

heart1 = createSprite(50,50,50,50);
heart1.addImage(heart1Img);

heart2 = createSprite(70,70,70,70);
heart2.addImage(heart2Img);

heart3 = createSprite(90,90,90,90);
heart3.addImage(heart3Img);

zombieGroup=new Group();
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
if(zombieGroup.isTouching(player)){
for(var i=0;i<zombieGroup.length;i++){
  if(zombieGroup[i].isTouching(player)){
    zombieGroup[i].destory();
  }
}

}
enemy();
drawSprites();
}

function enemy(){
if(frameCount%50===0){
zombie=createSprite(random(500,1000),random(100,400),50,50);
zombie.addImage(zombieImg);
zombie.velocityX=-5;
zombie.debug=true;
zombieGroup.add(zombie);
zombie.lifetime=300;

}

}
