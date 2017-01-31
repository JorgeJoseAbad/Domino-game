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

Player.prototype.searchNumber = function(a,b){
  for (i=0;i<this.body.length;i++){
  if ((this.body[i].number1===a && this.body[i].number2===b)||
   (this.body[i].number1===b && this.body[i].number2===a)){
    return true;
  }
}
  return false;
};


//jugador pone domino en la mesa pero lo hace por orden en el array (Shift) no por
// busqueda.
Player.prototype.placeDominoInBoard=function(dominoPiece,board,r1,c1,r2,c2){
  var shifted = this.body.shift();
  shifted.number1Pos.row=r1;
  shifted.number1Pos.column=c1;
  shifted.number2Pos.row=r2;
  shifted.number2Pos.column=c2;
  board.domino.unshift(shifted);
  return board.domino;
};


Player.prototype.playerTakeDomino=function(num1,num2){
    console.log("this.body    es:");
    console.log(this.body);
    console.log("numero1 es: "+num1);
    console.log("el primero es: "+this.body[0].number1);
    console.log("numero2 es: "+num1);
    console.log("el primero es: "+this.body[0].number2);
    console.log("............");
    var indexbody=0;
    this.body.forEach(function(item, index){
    //var i=index;
      console.log(item.number1+" "+num1);
      console.log(item.number2+" "+num2);
      console.log(index);

      if (((item.number1===num1) && (item.number2===num2)) ||
            ((item.number1===num2) && (item.number2===num1))){
        console.log("bingooooo");
        console.log("index: "+index);
        indexbody=index;
        return index;
      }
      return -1;
    },0);
    //console.log(indexDomino);
    console.log("indexDomino es: "+indexbody);
    console.log("ahora deberia toma el index of elemento");
    if (indexbody>-1) {
      return this.body.splice(indexbody,1);
      }
};



/*Player.prototipe.checkDomino=function (domino){
for (i=0;i<MAX_DOMINOES;i++){
  if (domino.number1 === this.body[i].number1 || domino.number1===this.body[i].number2 ||
    domino.number2===this.body[i].number1 || domino.number2===this.body[i].number2)
    return i;
    }
};
*/
