class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

      hurdle = createSprite(200, 300);
      hurdle.addImage("hurdle", h1);

      hurdle1 = createSprite(400, 300);
      hurdle1.addImage("hurdle1", h2);

      hurdle2 = createSprite(600, 300);
      hurdle2.addImage("hurdle2", h3);

      player1 = createSprite(100, 200);
      player1.addImage("player1", p1);

      player2 = createSprite(300, 200);
      player2.addImage("player2", p2);

      player3 = createSprite(500, 200);
      player3.addImage("player3", p3);

      players = [player1, player2, player3];
    } 
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      var index = 0;
      var x = 0;
      var y;
      for(var plr in allPlayers){
        index+=1;
        x+=200;
        y = displayHeight - allPlayers[plr].distance; 
        players[index-1].x = x;
        players[index-1].y = y;

        if(index === player.index)
        {
          players[index-1].shapeColor = "red";
         // camera.postion.x = displayWidth/2;
          //camera.postion.y = cars[index-1].y; 
        }

      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(player.distance == 4000){
      gameState = 2;
    }

    drawSprites();
  }

  end(){
    console.log("Game Ended");
    game.update(2);
  }

}
