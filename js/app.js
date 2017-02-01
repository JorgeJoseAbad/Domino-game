//se compone de dos jugadores y una tabla donde se ponen las fichas
//el juego crea la tabla.
//el juego crea las fichas, el cajon de fichas
//el juego crea dos jugadores
//el juego da el turno inicialmente al jugador 1.
//para iniciar el juego baraja las fichas.
//hace que cada jugador tome 8 fichas de la caja
//Determina si un jugador tiene seis doble si alguno lo tiene lo pone en la mesa
// si ninguno tiene el jugador 1 pone una ficha en la mesa y se le da visibilidad
// Pasa el juego al jugador 2 y comprueba si tiene una ficha que tenga un numero coincidente con uno de
// la ficha anterior:
//  si es asi la pone en la mesa adyaccente al numero buscado dando visibilidad al numero opuesto de la ficha,
//  y pasa turno al siguiente jugador.
//  si no, el jugador 2 toma una ficha de la caja y vuelve a comprobar.
//     si coincide la pone como especificado, si no coincide pasa turno al siguiente jugador
//
//El juego pasa al otro jugador actuando de la misma manera.
// el juego acaba cuando uno de los jugadores queda sin fichas (gana).
//      o cuando no coincide ninguna ficha del jugador 1 ni del jugador 2 con una de las visibles en tabla.
//
function GameDomino(options) {

  this.player1   =options.player1;
  this.player2   =options.player2;
  this.board     =options.board;
  this.dominobox =options.dominobox;


  this.dominobox.print();
  this.startGame();
  this.dominobox.shuffle();
  this.dominobox.print();
  //this.player1.startPlayer();
  //this.player2.startPlayer();
  this.giveDominoes();
  this.search66();
  //this.makeTurn();


}

//funcion que da el turno al jugador1 de entrada OK
GameDomino.prototype.startGame = function(){
  this.player1.turn=true;
  console.log("empezamos");
};

//funcion que envia la caja de fichas a los jugadores
//para que estos tomen sus 8 fichas
GameDomino.prototype.giveDominoes = function(){
console.log("hola");
  this.player1.startPlayer(this.dominobox);
  this.player2.startPlayer(this.dominobox);

};

//determina si hay un 6 doble al comienzo OK
GameDomino.prototype.search66 = function(){
  var col1=15;
  var row1=15;
  var row2=16;
  var col2=15;
  var dominotaken;

if (this.player1.searchNumber(6,6)) {
  console.log("empieza jugador 1");
  dominoTaken=this.player1.playerTakeDomino(6,6);
  this.player1.placeDominoInBoard(dominoTaken[0],this.board,row1,col1,row2,col2);
  $('div[data-row="'+row1+'"][data-col="'+col1+'"]').addClass('domino');
  $('div[data-row="'+row1+'"][data-col="'+col1+'"]').html(dominoBoard.domino[0].number1);
  $('div[data-row="'+row2+'"][data-col="'+col2+'"]').addClass('domino');
  $('div[data-row="'+row2+'"][data-col="'+col2+'"]').html(dominoBoard.domino[0].number2);
  this.player1.updatePlayerDominoes();

  this.player1.turn=false;
  this.player2.turn=true;
}
  else if (this.player2.searchNumber(6,6)) {
    console.log("empieza jugador 2");
    this.player1.turn=false;
    this.player2.turn=true;
    dominotaken=this.player2.playerTakeDomino(6,6);
    this.player2.placeDominoInBoard(dominotaken[0],this.board,row1,col1,row2,col2);
    $('div[data-row="'+row1+'"][data-col="'+col1+'"]').addClass('domino');
    $('div[data-row="'+row1+'"][data-col="'+col1+'"]').html(dominoBoard.domino[0].number1);
    $('div[data-row="'+row2+'"][data-col="'+col2+'"]').addClass('domino');
    $('div[data-row="'+row2+'"][data-col="'+col2+'"]').html(dominoBoard.domino[0].number2);
    this.player2.updatePlayerDominoes();
    this.player1.turn=true;
    this.player2.turn=false;
  }
   else {
    console.log("no hay 6 doble, empieza jugador 1 con cualquier ficha");
    this.player1.placeDominoInBoard(undefined,this.board,row1,col1,row2,col2);
    $('div[data-row="'+row1+'"][data-col="'+col1+'"]').addClass('domino');
    $('div[data-row="'+row1+'"][data-col="'+col1+'"]').html(dominoBoard.domino[0].number1);
    $('div[data-row="'+row2+'"][data-col="'+col2+'"]').addClass('domino');
    $('div[data-row="'+row2+'"][data-col="'+col2+'"]').html(dominoBoard.domino[0].number2);
    this.player1.updatePlayerDominoes();
    this.player1.turn=false;
    this.player2.turn=true;
    }

};

/*a partir de ahora seria el desarrollo normal del juego*/
//segun el turno jugador pone ficha en tabla en posicion central
GameDomino.prototype.makeTurn=function(){

var col1=30;
var row1=30;
var row2=31;
var col2=30;
var number=7;
  if (this.player2.turn===true){
    this.player2.placeDominoInBoard(this.board,row1,col2,row2,col2);
    $('div[data-row="'+row1+'"][data-col="'+col1+'"]').addClass('domino');
    $('div[data-row="'+row2+'"][data-col="'+col2+'"]').addClass('domino');
    $('div[data-row="'+row2+'"][data-col="'+col2+'"]').html(number);
  }
  else if (this.player1.turn===true){
    this.player1.placeDominoInBoard(this.board,row1,col1,row2,col2);
    $('div[data-row="'+row1+'"][data-col="'+col1+'"]').addClass('domino');
    $('div[data-row="'+row2+'"][data-col="'+col2+'"]').addClass('domino');

  }
};



$(document).ready(function() {

  var gameDomino = new GameDomino({
    player1:   player1,
    player2:   player2,
    board:     dominoBoard,
    dominobox: dominobox

  });

});
