
function Board(options) {

  this.rows           = options.rows;
  this.columns        = options.columns;
  this.rowPlayer      = options.rowsPlayer;
  this.columnsPlayer  = options.columnsPlayer;
  this.domino         = options.domino;



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



Board.prototype.placeNewDominoInBoard=function(dominoTaken){
  console.log("funcion place new domino in board");
  console.log(dominoTaken);

  var posr1=0;
  var posc1=0;
  var posr2=0;
  var posc2=0;
  var that=this;

  $('.cell-board').click(function(){
    posr1=parseInt($(this).attr("data-row"));
    posc1=parseInt($(this).attr("data-col"));
    posr2=posr1+1;
    posc2=posc1;
    console.log(posr1+" "+posc1+" "+posr2+" "+posc2);

    dominoTaken[0].number1Pos.row=posr1;
    dominoTaken[0].number1Pos.column=posc1;
    dominoTaken[0].number2Pos.row=posr2;
    dominoTaken[0].number2Pos.column=posc2;
    that.domino.unshift(dominoTaken[0]);
    $('div[data-row="'+posr1+'"][data-col="'+posc1+'"]').addClass('domino');
    $('div[data-row="'+posr1+'"][data-col="'+posc1+'"]').html(that.domino[0].number1);
    $('div[data-row="'+posr2+'"][data-col="'+posc2+'"]').addClass('domino');
    $('div[data-row="'+posr2+'"][data-col="'+posc2+'"]').html(that.domino[0].number2);
    return;
  });

};





var dominoBoard= new Board({
  rows:         30,
  columns:      30,
  rowsPlayer:    2,
  columnsPlayer: 8,
  domino:       []
});
