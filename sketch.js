var path,mouse,cheese,cat3,cat2,cat1;
var pathImg,mouseyRunImgImg,cat1Img,cat2Img,cat3Img,endImg;
var CheeseCount = 0;
var cheeseG,cat1G,cat2G,cat3G,mousey;
var edges;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("road.png.jpg");
  mouseyRunImg = loadAnimation("mouse1.png.png","mouse2.png.png");
  cheeseImg = loadImage("cheese.png.png");
  cat3Img = loadImage("cat3.png.png");
  cat2Img = loadImage("cat2.png.png");
  cat1Img = loadImage("cat1.png.png");
  endImg =loadAnimation("gameOver.png.png");
}

function setup(){
  
  createCanvas(600,700);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


mousey = createSprite(70,580,20,20);
mousey.addAnimation("mouseyRunImg");
mousey.scale=0.008;
  
  
cheeseG=new Group();
cat3G=new Group();
cat2G=new Group();
cat1G=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  mousey.x = World.mouseX;
  
  edges= createEdgeSprites();
  mousey.collide(edges);
  
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createcat1();
    createcat2();
    createcat3();
  createcheese();

    if (cheese.isTouching(mousey)) {
      cheese.destroyEach();
      CheeseCount=CheeseCount+25;
    
      
    }else{
      if(cat1G.isTouching(mousey)|| cat2G.isTouching(mousey) || cat3G.isTouching(mousey)) {
        gameState=END;
        
        
         mousey.addAnimation(mouseyRunImg,endImg);

        mousey.x=200;
        mousey.y=300;
        mousey.scale=0.02;
        
    
        cheeseG.destroyEach();
        cat3G.destroyEach();
        cat2G.destroyEach();
        cat1G.destroyEach();
        
        
        cheeseG.setVelocityYEach(0);
        cat1G.setVelocityYEach(0);
        cat2G.setVelocityYEach(0);
        cat3G.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Cheese: "+ CheeseCount,10,30);
  }

}

function createCheese() {
  if (World.frameCount % 200 == 0) {
  var cheese = createSprite(Math.round(random(50, 350),30, 10, 10));
  cheese.addImage(cheeseImg);
  cheese.scale=0.002;
  cheese.velocityY = 3;
  cheese.lifetime = 150;
  cheeseG.add(cheese);
  }
}

function createcat1() {
  if (World.frameCount % 320 == 0) {
  var cat1 = createSprite(Math.round(random(50, 350),30, 10, 10));
 cat1.addImage(cat1Img);
  cat1.scale=0.03;
  cat1.velocityY = 3;
  cat1.lifetime = 150;
  cat1G.add(cat1);
}
}

function createcat2() {
  if (World.frameCount % 410 == 0) {
  var cat2 = createSprite(Math.round(random(50, 350),30, 10, 10));
  cat2.addImage(cat2Img);
  cat2.scale=0.03;
  cat2.velocityY = 3;
  cat2.lifetime = 150;
  cat2G.add(cat2);
  }
}

function createcat3(){
  if (World.frameCount % 530 == 0) {
  var cat3 = createSprite(Math.round(random(50, 350),30, 10, 10));
  cat3.addImage(cat3Img);
  cat3.scale=0.03;
  cat3.velocityY = 3;
  cat3.lifetime = 150;
  cat3G.add(cat3);
  }
}
