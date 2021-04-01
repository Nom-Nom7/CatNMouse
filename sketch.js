var cat,catimg,catimg2;
var mouse,mouseimg,mouseimg2,mouseimg3;
var background, backgroundimg;

function preload() {
    catimg = loadImage("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");  

    mouseimg = loadImage("images/mouse4.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3 = loadImage("images/mouse1.png");
    backgroundimg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870,700,10,10);
    cat.addImage("CAT",catimg);
    cat.scale = 0.1;
    mouse  = createSprite(130,700,10,10);
    mouse.addImage("MOUSE",mouseimg);
    mouse.scale = 0.1;

}

function draw() {

    background(backgroundimg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.changeImage("CAT");
        cat.velocityX = 0;
        cat.x = 240;
        mouse.addImage("EASTER",mouseimg3);
        mouse.changeImage("EASTER");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {

  cat.velocityX = -5;
  cat.addAnimation("yes",catimg2);
  cat.changeAnimation("yes");
  mouse.addAnimation("no",mouseimg2);
  mouse.changeAnimation("no");
}

}