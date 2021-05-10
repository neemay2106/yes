var man,ground,manImage,backgroundImg;




function preload(){
  manImage = loadAnimation("images/run 1.png","images/run2.png","images/run3.png","images/run 4.png","images/run 5.png");
  backgroundImg = loadImage("images/png/Object/yes.png")
}

function setup() {
  createCanvas(800,400);
   man =  createSprite(220,300,55,50);
  ground = createSprite(400,350,800,10);
  man.addAnimation("manimage",manImage);
  
  man.scale = 0.3;
}


function draw() {
  background(backgroundImg); 
  //background.velocityX = -2;
 ground.visible = false;
if(keyDown("space")){
 man.velocityY = -10;

}
man.velocityY =  man.velocityY+ 1;


background.velocityX = -10;
if(background.x<0){
  background.x = background.width/2 
}

man.collide(ground);
  drawSprites();

}
