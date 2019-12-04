//Variáveis tipo let nomeDaVar;
let posX, posY
let velX, velY
let panWidth, padHeight
let diamBall

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas

  posX = random (width);
  posY = random (height);
  velX = random (-10,10);
  velY = random (-10, 10);
  padWidth = 60;
  padHeight = 8;
  diamBall = 10;
  
}




  function draw() {
    background(123, 201, 144);
    posX = posX + velX;
    posY = posY + velY;
    noStroke();
    ellipse(posX, posY, diamBall);
    rectMode(CENTER);
    rect(mouseX,height-10, padWidth, padHeight);
    rect(mouseX, height-4,70,9);

  if(posX- diamBall/2 <= 0 || posX+diamBall/2 >= width) {
    velX = velX*-1; //muda o sinal da velocidade
  }
    if(posY- diamBall / 2 <= 0) {
      velY = velY*-1; //muda o sinal da velocidade
  }
    if (posY+diamBall/2 >= height) {
      print ("perdeste");
      velY= 0;
      velX= 0;
  }
    if (posX-diamBall/2 >= mouseX-padWidth/2
        && posX+diamBall/2 <= mouseX+padWidth/2 &&
        posY >= height -10- padHeight/2) {
        velY = velY*-1; //muda o sinal da velocidade
        }

}
