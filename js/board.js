
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


for (var rowPlayer=0; rowPlayer < options.rowsPlayer; rowPlayer++){
  for (var columnPlayer=0; columnPlayer<options.columnsPlayer; columnPlayer++){
    $('#dominoesPlayer1').append($('<div>')
      .addClass('cell-player1')
      .attr('data-row',rowPlayer)
      .attr('data-col',columnPlayer)
    );
    $('#dominoesPlayer2').append($('<div>')
      .addClass('cell-player2')
      .attr('data-row',rowPlayer)
      .attr('data-col',columnPlayer)
      );
    }
  }
}

var dominoBoard= new Board({
  rows: 30,
  columns: 30,
  rowsPlayer: 2,
  columnsPlayer: 8,
  domino: []
});
