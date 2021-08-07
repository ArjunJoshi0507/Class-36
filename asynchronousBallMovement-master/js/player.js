class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    getCount(){
        var ref = database.ref("playerCount")
        ref.on("value",data=>{
            playerCount = data.val()
        })
        
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    update(){
        var index = "players/player" + this.index;
        database.ref(index).set({
            name : this.name,
            distance :  this.distance
        })
    }
    static getPlayersInfo(){
        var ref=database.ref("players");
        ref.on("value",data=>{
            allPlayers = data.val();
        })
    }
}