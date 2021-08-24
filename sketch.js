function preload(){
snow = loadImage("snow1.jpg")
snowFlake = loadImage ("snow5.webp")
snowman = loadAnimation("snowman1.gif","snowman2.gif","snowman3.gif")
santa = loadAnimation("santa1.gif","santa2.gif","santa3.gif","santa4.gif")
}


function setup() {

  createCanvas(800,400);
  myBackground= createSprite(400,200)
  myBackground.addImage(snow);
  myBackground.scale = 1.7
  mySanta = createSprite(900,300)
  mySanta.addAnimation("santa",santa)
  mySanta.velocityX= -2
mySnowman= createSprite (40,100)
mySnowman.scale = 0.5
mySnowman.addAnimation ("snowMan",snowman )
}


function draw() {
  background(255,255,255);  
  CreateFlake()
  drawSprites();
 if(mySanta.x< -300){
   mySanta.x= 900

 }
} 
function CreateFlake(){
  if(frameCount%50 === 0){
    flake = createSprite(random(100,700),0)
    flake.addImage(snowFlake)
    flake.scale= 0.1
    flake.velocityY= 2
  }
}