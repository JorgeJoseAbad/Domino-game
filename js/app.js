

function GameDomino(options) {

  this.player1   =options.player1;
  this.player2   =options.player2;
  this.board     =options.board;
  this.dominobox =options.dominobox;


  this.dominobox.print();
  this.startGame();
  this.dominobox.shuffle();
  this.dominobox.print();
  this.giveDominoes();
  this.search66();
  this.makeTurn();


}


GameDomino.prototype.startGame = function(){
  this.player1.turn=true;
  console.log("empezamos");
};


GameDomino.prototype.giveDominoes = function(){
console.log("Damos fichas");
  this.player1.startPlayer(this.dominobox);
  this.player2.startPlayer(this.dominobox);

};


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
    $('.namePlayer2').addClass('turn');

  }
    else if (this.player2.searchNumber(6,6)) {
      console.log("empieza jugador 2");
      this.player1.turn=false;
      this.player2.turn=true;
      $('.namePlayer2').addClass('turn');

      dominotaken=this.player2.playerTakeDomino(6,6);
      this.player2.placeDominoInBoard(dominotaken[0],this.board,row1,col1,row2,col2);
      $('div[data-row="'+row1+'"][data-col="'+col1+'"]').addClass('domino');
      $('div[data-row="'+row1+'"][data-col="'+col1+'"]').html(dominoBoard.domino[0].number1);
      $('div[data-row="'+row2+'"][data-col="'+col2+'"]').addClass('domino');
      $('div[data-row="'+row2+'"][data-col="'+col2+'"]').html(dominoBoard.domino[0].number2);
      this.player2.updatePlayerDominoes();

      this.player1.turn=true;
      this.player2.turn=false;
      $('.namePlayer2').removeClass('turn');
      $('.namePlayer1').addClass('turn');

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
      $('.namePlayer1').removeClass('turn');
      $('.namePlayer2').addClass('turn');
      }

};


GameDomino.prototype.makeTurn=function(){

  console.log("empezamos con las jugadas normales");
  var num1=0;
  var num2=0;
  var that = this;

    if (this.player2.turn===true){
      console.log(this.player2.name);
      console.log("player 2 tiene turno");
      $('.dominoTokenP2').click(function(){
        var num0=$(this).attr("tokenNumber");
        console.log("he pasao por turno manual en player 2");
        console.log("num0: "+num0);
        num1=parseInt($(this)[0].childNodes[0].innerHTML);
        num2=parseInt($(this)[0].childNodes[1].innerHTML);
        console.log("Domino selected by player2: "+num1+" | "+num2);
        var dominoTakenP2;
        if (that.player2.searchNumber(num1,num2)){
            dominoTakenP2=that.player2.playerTakeDomino(num1,num2);
            console.log("dominopillado: "+dominoTakenP2[0].number1+
            "|"+dominoTakenP2[0].number2);

        }
        that.board.placeNewDominoInBoard(dominoTakenP2);
        that.player2.updatePlayerDominoes();
        that.player2.turn=false;
        that.player1.turn=true;
        $('.namePlayer2').removeClass('turn');
        $('.namePlayer1').addClass('turn');
        that.makeTurn();
      });
    }

    else if (this.player1.turn===true){
      console.log(this.player1.name);
      console.log("player 1 tiene turno");
      $('.dominoTokenP1').click(function(){
        var num0=$(this).attr("tokenNumber");
        console.log("he pasado por turno manual en player 1");
        console.log("num0: "+num0);
        num1=parseInt($(this)[0].childNodes[0].innerHTML);
        num2=parseInt($(this)[0].childNodes[1].innerHTML);
        console.log("Domino selected: by player1 "+num1+" | "+num2);
        var dominoTakenP1;
        if (that.player1.searchNumber(num1,num2)){
          dominoTakenP1=that.player1.playerTakeDomino(num1,num2);
          console.log("dominopillado: "+dominoTakenP1[0].number1+
          "|"+dominoTakenP1[0].number2);

        }
        that.board.placeNewDominoInBoard(dominoTakenP1);
        that.player1.updatePlayerDominoes();
        that.player1.turn=false;
        that.player2.turn=true;
        $('.namePlayer1').removeClass('turn');
        $('.namePlayer2').addClass('turn');
        that.makeTurn();
      });
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
