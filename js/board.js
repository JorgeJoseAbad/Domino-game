
//Board  contiene array de dominoes, inicialmente vacio
//Board  tiene unas dimensiones en rows and columns
//Board  muestra fichas fichas expuestas
//Board  muestra estado jugador activo (fichas y sus numeros )
function Board(options) {

  this.rows           = options.rows;
  this.columns        = options.columns;
  this.rowPlayer      = options.rowsPlayer;
  this.columnsPlayer  = options.columnsPlayer;
  this.domino         = options.domino;


//para dar formato a la tabla
  for (var rowIndex = 0; rowIndex < options.rows; rowIndex++){
    for (var columnIndex = 0; columnIndex < options.columns; columnIndex++){
      $('.boardTable').append($('<div>')
        .addClass('cell-board')
        .attr('data-row', rowIndex)
        .attr('data-col', columnIndex)
      );
    }
  }

  for (var columnsPlayerindex=0; columnsPlayerindex<options.columnsPlayer;
                                      columnsPlayerindex++){
    $('#dominoesPlayer1').append($('<div>')
      .addClass('dominoTokenP1')
      .attr('tokenNumber',columnsPlayerindex)
      );
    $('#dominoesPlayer2').append($('<div>')
      .addClass('dominoTokenP2')
      .attr('tokenNumber',columnsPlayerindex)
      );
    }
    for (var rowsPlayerindex=0; rowsPlayerindex<options.rowsPlayer;
                                        rowsPlayerindex++){
      $('.dominoTokenP1').append($('<div>')
        .addClass('parNumberP1')
        .attr('numberInToken',rowsPlayerindex)
      );
      $('.dominoTokenP2').append($('<div>')
        .addClass('parNumberP2')
        .attr('numberInToken',rowsPlayerindex)
      );

    }
}


//FUNCTION NOT FULLY IMPLEMENTED!!!!!!!
Board.prototype.placeNewDominoInBoard=function(dominoTaken){

  $('.dominoTokenP2').click(function(){
    var posr1=$(this).attr("data-row");
    var posc1=$(this).attr("data-col");
    var posr2=posr1+1;
    var posc2=posc1;

  });

  dominoTaken.number1Pos.row=posr1;
  dominoTaken.number1Pos.column=posc1;
  dominoTaken.number2Pos.row=posr2;
  dominoTaken.number2Pos.column=posc2;
  this.domino.unshift(dominoTaken);
  $('div[data-row="'+posr1+'"][data-col="'+posc1+'"]').addClass('domino');
  $('div[data-row="'+posr1+'"][data-col="'+posc1+'"]').html(this.domino[0].number1);
  $('div[data-row="'+posr2+'"][data-col="'+posc2+'"]').addClass('domino');
  $('div[data-row="'+posr2+'"][data-col="'+posc2+'"]').html(this.domino[0].number1);

};







var dominoBoard= new Board({
  rows: 30,
  columns: 30,
  rowsPlayer: 2,
  columnsPlayer: 8,
  domino: []
});
