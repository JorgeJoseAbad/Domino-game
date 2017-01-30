// player have dominoes 8 maximum at a time he begin with 0 dominoes
// player knows how many dominoes have.
//player comprueba si una de sus fichas tiene un numero que coincide con el de una ficha
// puesta en la tabla
//player put dominoes in desk
//player get dominoes from Dominobox
//player can put dominoes in Dominobox
function Player(options) {
  this.MAX_DOMINOES=8;
  this.body =  []; //dominoes of player
  this.turn= false; //jugador no tiene turno por defecto
  this.name=options.name;

}


var player1 = new Player({
  name: "player1",
});

var player2= new Player({
  name: "player2",
});

//funcion que carga al jugador con 8 fichas que extrae
//de la caja OK
Player.prototype.startPlayer=function(dominobox){

  for  (i=0;i<this.MAX_DOMINOES;i++){
    //console.log("pasopor aqi");
    //console.log(this.name);
    var shifted =dominobox.body.shift();
    this.body.unshift(shifted);
    //this.body=push(Dominobox.prototype.getDomino());
  }
  return this.body;
};



/*Player.prototipe.checkDomino=function (domino){
for (i=0;i<MAX_DOMINOES;i++){
  if (domino.number1 === this.body[i].number1 || domino.number1===this.body[i].number2 ||
    domino.number2===this.body[i].number1 || domino.number2===this.body[i].number2)
    return i;
    }
};
*/
