var cars,cars2,cars3;
var carGroup;
var car1Img,car2Img,car3Img;
var backgroundImg;
var bike;
var speed;
var ground;
var player;
var gameState = 1;
var score = 0; 
function preload(){
  car1Img = loadImage("car1.png");
  car2Img = loadImage("car2.png");
  car3Img = loadImage("car3.png");
  //car4Img = loadImage("car4.png");
  backgroundImg = loadImage("track.png");
  lamborghini = loadImage("lambo.png");
  gameOve = loadImage("gameover.png")
  crash = loadImage("bgpower.png");
}
function setup() {
  createCanvas(800,412);
 // createSprite(400, 200, 50, 50);
  
 
 ground = createSprite(380,400,20,800);
 ground.addImage(backgroundImg);
 ground.y = ground.height/2;
 player = createSprite(200,50,10,10);
 player.addImage(lamborghini);
 carGroup = new Group();
}

function draw() {
  background("black");
  if(gameState === 1){
  ground.velocityY = -11;
  
  if(ground.y < 80){
    ground.y = ground.height/2;
  }
  
  score = Math.round(World.frameCount/4);
 
    
  
  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 10;
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x - 10;
  }
  spawnCars();
}
  if(player.collide(carGroup)){
    gameState = 2;
  }
  if(gameState === 2){
    image(gameOve,5,-20,800,600);
  }
  if(player.x>600||player.x<85){
    gameState = 3;
  }
  if(gameState === 3){
    image(crash,5,-20,800,600);
  }
  
  player.scale = 0.3;
  
  
    

   carGroup.setColliderEach("rectangle",1,1,5,5);
  drawSprites();
  fill("red");
  textSize(25)
  text("Score : "+score,510,50);
}
function spawnCars(){
  if(World.frameCount % 100 === 0) {
   cars = createSprite(random(100,500),1000,60,40);
   //cars.debug = true;
   //cars.setCollider("rectangle",1,1,5,5);
    
    cars2 = createSprite(random(100,500),1000,60,40);
    //cars2.debug = true;
    //cars2.setCollider("rectangle",1,10,95,95);
    cars2.depth = 5;
    cars3 = createSprite(random(100,500),1000,60,40);
   // cars3.debug = true;
    //cars3.setCollider("rectangle",1,1,5,5);
    cars.velocityY = -10;
    cars2.velocityY = -25;
    cars3.velocityY = -20;
    
    cars.shapeColor = "white"
    cars.addImage(car1Img);
    cars2.addImage(car2Img);
    cars3.addImage(car3Img);
    cars.scale = 1;
    cars2.scale = 1;
    cars3.scale = 1;
    cars.rotate = 180;
    cars2.rotate = 180;
    cars3.rotate = 180;
    
    carGroup.add(cars);
    carGroup.add(cars2);
    carGroup.add(cars3);
  }
  }
   