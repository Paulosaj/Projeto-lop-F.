var x = 700
var y = 300 
var k = 0 
var j = 325 
var nivel = 1
var vida = 1 
var x0 = []; 
var y0 = [];
var tela = 1
var tamanho = 50;
var inimigos = 3;
let a;
let b;
let c;
let d;
let jogador;
let inimigo;
let inimigo2;
let in3;
let go;
let pa;
let vi;
let gameover;

function preload(){
  a = loadImage('school.png')
  b = loadImage('tela1.jpg')
  c = loadImage('tela2.png')
  d = loadImage('tela00.png')
  jogador = loadImage('jogador2.0.png')
  inimigo = loadImage('car1.png')
  inimigo2 = loadImage('inimigo2.0.png')
  in3 = loadImage('in3.png')
  go = loadImage('fim de jogo.png')
  pa = loadImage('house1.png')
  vi = loadSound('vitória.flac')
  gameover = loadSound('game_over.wav')
  
}
// os códigos de "setup" só executam uma vez 
function setup() {
  createCanvas(700,500);
  for(i=0;i<inimigos;i++){  
    x0[0] = 100
    y0[0] = -random(100)
    x0[1] = 300
    y0[1] = -random(100)
    x0[2] = 500
    y0[2] = -random(100)
  
  }
  for(i=0;i<inimigos;i++){  
    x0[0] = 100
    y0[0] = -random(100)
  }
}

// os códigos de "draw" executam constantemente 
function draw() {
if(tela === 1){
  imageMode(CORNER)  
  background(a);


  textSize(20);
  text("Aperte Enter para iniciar! ", 100, 200);
  if(keyIsDown(ENTER)){
    tela = 2
  }
}

 // Velocidade dos inimigos //
      
  if(tela == 2){
  if(nivel == 1){
  imageMode(CORNER)
  background(b);

  for(i=0; i<inimigos; i++){
     y0[i]= y0[i]+6;
    imageMode(CENTER) 
    image(inimigo, x0[i], y0[i], tamanho*5,tamanho*2)
     
     //rect( x0[i], y0[i], tamanho*5,tamanho*2)
 }
 }
 if(nivel == 2){
   imageMode(CORNER)
   background(c)
   for(i=0; i<inimigos; i++){
     y0[i]= y0[i]+8;
     imageMode(CENTER);
     image(inimigo2, x0[i], y0[i], 80, tamanho);
     tamanho = 150;
     
 }
 }
 if(nivel == 3){  
   imageMode(CORNER)
   background(d)
   tamanho = 90
    for(i=0; i<inimigos; i++){
     y0[i]= y0[i]+10;
      imageMode(CENTER);
      image(in3, x0[i], y0[i], 60,tamanho);
      tamanho = 100;
 }
 }  
 for(i=0; i<inimigos; i++){
     y0[i]= y0[i]+6;
     //rect(x0[i], y0[i], tamanho, tamanho);
 }
   
  // MOVIMENTOS //
  //ellipse(x, y, 55, 55);
    image(jogador, x, y, 55, 55);
    imageMode(CENTER)

 //MOVIMENTOS DO JOGADOR// 

  //Limitações de espaço horizontal//

  if(x<0){
    x=10}
  if(x>700){
    x = 690}

  //Limitações de espaço vertical //

    if(y<0){
    y=10}
  if(y>500){
    y = 490}

    if(keyIsDown(DOWN_ARROW)){
      y += 5;
    }
    if(keyIsDown(UP_ARROW)){
      y -= 5;
    }
  
  if (keyIsDown(LEFT_ARROW)) {
    
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  // FASES //
    
if(nivel == 1){  
  if(x==0){
    vida++;
    nivel=2;
    x = 700;
    tamanho = 50;
    
  }  
}
if(nivel ==2){
  if(x==0){ 
    vida++;
    nivel=3
    x=700
    
  }
}
if(nivel == 3){  
  if(x==0){  
    nivel = 4
  }

}
if(nivel == 4){  
  tela =4


}
  // MOVIMENTOS INIMIGO //

  
for(i=0;i<inimigos;i++){
    if (y0[i]>height){ // Se o objeto sair da tela, voltar lá pra cima//
      y0[i] = -random(height);

    }
  }
   
  
  //Legenda//

  textSize(20);
  text("Nível: "+nivel,600,30);
  text('Vida: '+vida,500,30)
  fill(255,255,255);

  // Colisão // 

  if(dist(x,y,j,k)<(90)){
    vida--;
    k = 10;
    x = 700;

  }
if(nivel == 1 || nivel == 2 || nivel == 3){
for(i=0;i<inimigos;i++){
    if(dist( x, y, x0[i],y0[i]) <= 50){ 
      vida--
      y0[i] = -random(0,10);

}} }
  if(vida == 0){  
    tela = 3
  
  }
}
  if(tela == 3){  
    if(keyIsDown(ENTER)){  
      vida = 1;
      nivel = 1;
      x = 700;
      y = 300;
      tela = 2
      tamanho = 50
    }
    gameover.play()
    imageMode(CORNER) 
    background(go);

    fill(0)
    text("Game Over ", 300, 250);
    text("Aperte Enter para jogar novamente...", 300, 450);
    
  
  }
  else{
  gameover.stop()
  }
  
  if(tela == 4){  
    vi.play();
    imageMode(CORNER)
    background(pa);
    
    fill(255)
    text("Parabéns", 300, 150);
    text("Aperte Enter para jogar novamente!", 300, 200);
    if(keyIsDown(ENTER)){
      tela = 2
    }}
  else{
  vi.stop()
  }
  
}
