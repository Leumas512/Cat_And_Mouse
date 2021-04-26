var garden,jerry,tom
var gardenImage,jerry1Image,jerryW,jerry4Image, tom1Image,tomRunning,tom4Image

function preload() {
    gardenImage = loadImage("images/garden.png")
    tom1Image = loadImage("images/tomOne.png")
    jerry1Image = loadImage("images/jerryOne.png")
    jerryW = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    tomR = loadAnimation("images/tomThree.png","images/tomTwo.png")
    tom4Image = loadImage("images/tomFour.png")
    jerry4Image = loadImage("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(400,390,300,20)
    garden.addImage("garden",gardenImage)
    garden.scale = 1
    tom = createSprite(700,600,20,20)
    tom.addImage("tom1",tom1Image)
    tom.scale = 0.2
    jerry = createSprite(100,600,20,20)
    jerry.addImage("jerry1",jerry1Image)
    jerry.scale = 0.1
    jerry.debug = false
    jerry.setCollider("rectangle",-34,-34,700,850)
}

function draw() {
    background(255);
    if(tom.isTouching(jerry)){
        tom.velocityX = 0
        tom.addImage("tom4",tom4Image)
        tom.changeImage("tom4",tom4Image)
        jerry.addImage("jerry4",jerry4Image)
        jerry.changeImage("jerry4",jerry4Image)
    }

    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
        tom.velocityX = -5
        tom.scale = 0.25
        tom.addAnimation("runningTom",tomR)
        tom.changeAnimation("runningTom")
        jerry.addAnimation("r",jerryW)
        jerry.changeAnimation("r")
 }


}
