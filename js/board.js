
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

var dominoBoard= new Board({
  rows: 30,
  columns: 30,
  rowsPlayer: 2,
  columnsPlayer: 8,
  domino: []
});
