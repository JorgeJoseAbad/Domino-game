// player have dominoes 8 maximum at a time he begin with 0 dominoes
//player put dominoes in desk
//player get dominoes from Dominobox
//player can put dominoes in Dominobox
function Player(options) {
  var MAX_DOMINOES=8;
  this.body =  [];

}



var player = new Player({

});

Player.prototype.start=function(){
var ndomino;
  while (ndomino<=this.MAX_DOMINOES){
    this.body=push(Dominobox.prototype.getDomino());
  }

};
