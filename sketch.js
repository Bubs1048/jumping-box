var canvas, fSprite1, fSprite2, fSprite3, fSprite4;
var movingSprite;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    movingSprite = createSprite(random(20,750),300,10,10)
    movingSprite.shapeColor = "white"
    movingSprite.velocityX = 4
    movingSprite.velocityY = 4

    fSprite1 = createSprite(100,590,180,20)
    fSprite1.shapeColor = "orange"

    fSprite2 = createSprite(300,590,180,20)
    fSprite2.shapeColor = "red"
    
    fSprite3 = createSprite(500,590,180,20)
    fSprite3.shapeColor = "green"

    fSprite4 = createSprite(700,590,180,20)
    fSprite4.shapeColor = "blue"


}

function newFunction() {
    return 300;
}

function draw() {
    background(rgb(169,169,169));

    if (movingSprite.x<0){
       music.stop ()
        movingSprite.velocityX = 4

    } else if (movingSprite.x>800){
        music.stop ()
        movingSprite.velocityX = -4
    }

    if(isTouch(movingSprite,fSprite4)) {
        music.play ()
            movingSprite.shapeColor = "blue"
            bounce(movingSprite,fSprite4)
        
    }

    if(isTouch(movingSprite,fSprite3)) {
        music.play ()
            movingSprite.shapeColor = "green"
            bounce(movingSprite,fSprite3)
        
    }

    if(isTouch(movingSprite,fSprite2)) {
        music.play ()
            movingSprite.shapeColor = "red"
            bounce(movingSprite,fSprite2)
            movingSprite.velocityX = 0
            movingSprite.velocityY = 0
        
    }

    if(isTouch(movingSprite,fSprite1)) {
        music.play ()
            movingSprite.shapeColor = "orange"
            bounce(movingSprite,fSprite1)
        
    }

    if(movingSprite.y<0){
        music.stop ()
        movingSprite.velocityY = 3
    }
    
    drawSprites ()
}
