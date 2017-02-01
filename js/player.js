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

  for  (i=0,col=0;i<this.MAX_DOMINOES;i++){

    var shifted =dominobox.body.shift();
    this.body.unshift(shifted);
    if (this.name==='player2'){
      $('.cell-player2[data-row="'+'0'+'"][data-col="'+col+'"]').addClass('domino');
      $('.cell-player2[data-row="'+'0'+'"][data-col="'+col+'"]').html(this.body[0].number1);
      $('.cell-player2[data-row="'+'1'+'"][data-col="'+col+'"]').addClass('domino');
      $('.cell-player2[data-row="'+'1'+'"][data-col="'+col+'"]').html(this.body[0].number2);
      }
    if (this.name==='player1'){
      $('.cell-player1[data-row="'+'0'+'"][data-col="'+col+'"]').addClass('domino');
      $('.cell-player1[data-row="'+'0'+'"][data-col="'+col+'"]').html(this.body[0].number1);
      $('.cell-player1[data-row="'+'1'+'"][data-col="'+col+'"]').addClass('domino');
      $('.cell-player1[data-row="'+'1'+'"][data-col="'+col+'"]').html(this.body[0].number2);
      }
    col++;

  }
  return this.body;
};


Player.prototype.searchNumber = function(a,b){
  for (i=0;i<this.body.length;i++){
  if ((this.body[i].number1===a && this.body[i].number2===b)||
   (this.body[i].number1===b && this.body[i].number2===a)){
     console.log("numero "+a+b+"encontrado");
    return true;
  }
}
  return false;
};


//jugador pone domino en la mesa pero lo hace por orden en el array (Shift) no por
// busqueda.
Player.prototype.placeDominoInBoard=function(dominoTaken,board,r1,c1,r2,c2){
  if (typeof dominoTaken !== 'undefined'){
    dominoTaken.number1Pos.row=r1;
    dominoTaken.number1Pos.column=c1;
    dominoTaken.number2Pos.row=r2;
    dominoTaken.number2Pos.column=c2;
    board.domino.unshift(dominoTaken);
    return board.domino;
  }
  else {
    var shifted = this.body.shift();
    shifted.number1Pos.row=r1;
    shifted.number1Pos.column=c1;
    shifted.number2Pos.row=r2;
    shifted.number2Pos.column=c2;
    board.domino.unshift(shifted);
    return board.domino;
  }
};


Player.prototype.playerTakeDomino=function(num1,num2){
    var indexbody=0;
    this.body.forEach(function(item, index){

      if (((item.number1===num1) && (item.number2===num2)) ||
            ((item.number1===num2) && (item.number2===num1))){
        indexbody=index;
        return index;
      }
      return -1;
    },0);

    if (indexbody>-1) {
      return this.body.splice(indexbody,1);
      }
};

//function that udate players dominoes visual
Player.prototype.updatePlayerDominoes=function(){
 if (this.name=="player1") {
    for (i=0; i<this.body.length; i++){
      console.log(this.name);
      console.log(this.body.length);
      console.log("paso por actualizado");
      $('.cell-player1[data-row="'+'0'+'"][data-col="'+i+'"]').html(this.body[i].number1);
      $('.cell-player1[data-row="'+'1'+'"][data-col="'+i+'"]').html(this.body[i].number2);
    }
    for (i=this.body.length; i<this.MAX_DOMINOES; i++){
      console.log(this.name);
      console.log(this.body.length);
      console.log("paso por borrado");
      $('.cell-player1[data-row="'+'0'+'"][data-col="'+i+'"]').html(' ');
      $('.cell-player1[data-row="'+'1'+'"][data-col="'+i+'"]').html(' ');
    }
  }
  else if (this.name=='player2'){
    for (i=0; i<this.body.length; i++){
      console.log(this.name);
      console.log(this.body.length);
      console.log("paso por actualizado");
      $('.cell-player2[data-row="'+'0'+'"][data-col="'+i+'"]').html(this.body[i].number1);
      $('.cell-player2[data-row="'+'1'+'"][data-col="'+i+'"]').html(this.body[i].number2);
    }
    for (i=this.body.length; i<this.MAX_DOMINOES; i++){
      console.log(this.name);
      console.log(this.body.length);
      console.log("paso por borrado");
      $('.cell-player2[data-row="'+'0'+'"][data-col="'+i+'"]').html(' ');
      $('.cell-player2[data-row="'+'1'+'"][data-col="'+i+'"]').html(' ');
    }

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
