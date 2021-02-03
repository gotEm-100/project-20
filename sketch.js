var tom,jerry
var tomWalking,jerryTeasing,backImage
function preload() {
    //load the images here
    tomWalking.loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png")
    jerryTeasing.loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png")
    backImage.loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   

}

function draw() {

    background(255);

    text(mouseX + ',' + mouseY,10,45)
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
