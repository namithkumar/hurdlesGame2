var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var p1, p2, p3, h1, h2, h3;

var player1, player2, player3, hurdle, hurdle1, hurdle2;
var players = [];

function preload(){
  p1 = loadImage("1.png");
  p2 = loadImage("2.png");
  p3 = loadImage("3.png");
  h1 = loadImage("4.png");
  h2 = loadImage("4.png");
  h3 = loadImage("4.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
