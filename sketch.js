var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
surface1=createSprite(50,380,60,10);
surface1.shapeColor="red";
surface2=createSprite(150,380,60,10);
surface2.shapeColor="green";
surface3=createSprite(250,380,60,10);
surface3.shapeColor="orange";
surface4=createSprite(350,380,60,10);
surface4.shapeColor="blue";

    //create box sprite and give velocity
ball=createSprite(random(20,750));
ball.shapeColor="white";
ball.velocityX=4;
music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
//ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
if(surface1.isTouching(ball)&&bounceOff(surface1)){
    ball.velocityX=0;
    ball.shapeColor="red";
    music.stop();
}
if(surface2.isTouching(ball)&&bounceOff(surface2)){
    ball.velocityX=0;
    ball.shapeColor="green";
    music.stop();
}
if(surface3.isTouching(ball)&&bounceOff(surface3)){
    ball.velocityX=0;
    ball.shapeColor="orange";
    music.stop();
}
if(surface4.isTouching(ball)&&bounceOff(surface4)){
    ball.velocityX=0;
    ball.shapeColor="blue";
    music.stop();
}

    drawSprites();
}
