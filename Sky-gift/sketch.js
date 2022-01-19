var PLAY = 0;
var END = 1;
var gameState = PLAY;
var score

var aeroplane,gift,cart
var aeroplaneImg,giftImg,cartImg

function preload(){
  aeroplaneImg = loadImage("aeroplane.png")
  giftImg = loadImage("gift.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  

  score = 0;
}

function draw() {
  background("black");
  

  
  drawSprites();
}

