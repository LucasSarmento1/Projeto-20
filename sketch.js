var fundoimg;
var gato
var rato



function preload() {
    //carregue as imagens aqui
    fundoimg = loadImage("images/garden.png");
    gatoimg1 = loadImage("images/cat1.png");
    ratoimg1 = loadImage("images/mouse1.png");
    gatoimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    ratoimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    finalg = loadImage("images/cat4.png");
    finalr = loadImage("images/mouse4.png");    
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870,600);
    gato.scale = 0.2;
    gato.addAnimation("deitado",gatoimg1);
    gato.addAnimation("andando",gatoimg2);
    gato.addAnimation("parado",finalg);
    

    rato = createSprite(170,600);
    rato.addAnimation("mouse1.png",ratoimg1);
    rato.scale = 0.2;
}

function draw() {

    background(fundoimg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(gato.x - rato.x < (gato.width - rato.width)/2){
       gato.velocityX=0;
       gato.changeAnimation("parado");
       gato.x =300;
       gato.scale=0.2;

    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === LEFT_ARROW){
    rato.addAnimation("images/cat2.png","images/cat3.png", ratoimg2);
    rato.changeAnimation("mouse3.png");
    rato.frameDelay = 25;

    gato.velocityX= -5
    gato.changeAnimation("andando");

  }
}
