
//tabla contiene array de dominoes, inicialmente vacio
//tabla tiene unas dimensiones en rows and columns
//tabla muestra fichas fichas expuestas
//tabla muestra estado jugador activo (fichas y sus numeros )
function Board(options) {

  this.rows    = options.rows;
  this.columns = options.columns;
  this.domino  = options.domino;



  for (var rowIndex = 0; rowIndex < options.rows; rowIndex++){
    for (var columnIndex = 0; columnIndex < options.columns; columnIndex++){
      $('.boardTable').append($('<div>')
        .addClass('cell board')
        .attr('data-row', rowIndex)
        .attr('data-col', columnIndex)
      );
    }
  }
}

var dominoBoard= new Board({
  rows: 50,
  columns: 50,
  domino: []
});
