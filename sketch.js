var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage,apple;
var orangeL,orangeLImage;
var redL,redLImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage=loadImage("apple.png")
  orangelImage=loadImage("orangeLeaf.png");
  redLImage=loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;
  drawSprites();
console.log(frameCount);
  spawnObjects();
  

}

function spawnObjects(){
 var rand 
 var select_sprites=Math.round(random(1,3));
if(frameCount%80==0){
 if(select_sprites==1){
   apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage);
  apple.scale=0.03;
  apple.velocityY=3;

 }  else if(select_sprites==2){
   orangeL=createSprite(random(50,350),40,10,10);
 orangeL.addImage(orangelImage);
  orangeL.scale=0.03;
  orangeL.velocityY=3;
 }else if(select_sprites==3){
   redL=createSprite(random(50,350),40,10,10);
redL.addImage(redLImage);
  redL.scale=0.03;
    redL.velocityY=3;
  
 }
     
  
  
}
}