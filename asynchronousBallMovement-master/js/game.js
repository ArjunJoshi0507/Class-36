class Game {
    constructor(){

    }

    getState(){
        var ref = database.ref("gameState")
        ref.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState : state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        var displayPosition = 130;
        text("Game Start", 120,100);
        Player.getPlayersInfo()
        if(allPlayers !== undefined){
            for(var plr in allPlayers){
                textSize(15)
                displayPosition+=20
                if(plr === "player"+player.index){
                    fill("red")
                }
                else{fill("black")}
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
            player.distance+=50
            player.update()
        }
    }
}