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
  //this.giveDominoes();


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

//GameDomino.prototipe.search66=function(){




var gameDomino = new GameDomino({
  player1:   player1,
  player2:   player2,
  board:     dominoBoard,
  dominobox: dominobox

});
