
function Player(options) {
  this.MAX_DOMINOES=8;
  this.body =  [];
  this.turn= false;
  this.name=options.name;

}


var player1 = new Player({
  name: "player1",
});

var player2= new Player({
  name: "player2",
});


Player.prototype.startPlayer=function(dominobox){

  for  (i=0 ;i<this.MAX_DOMINOES; i++){

    var shifted =dominobox.body.shift();
    this.body.unshift(shifted);

    if (this.name==='player2'){
      $('.dominoTokenP2[tokenNumber='+i+']').addClass('domino');
      $('.dominoTokenP2[tokenNumber="'+i+'"]')[0].childNodes[0].innerHTML = this.body[0].number1;
      $('.dominoTokenP2[tokenNumber="'+i+'"]')[0].childNodes[1].innerHTML = this.body[0].number2;
      }
    if (this.name==='player1'){
      $('.dominoTokenP1[tokenNumber='+i+']').addClass('domino');
      $('.dominoTokenP1[tokenNumber="'+i+'"]')[0].childNodes[0].innerHTML = this.body[0].number1;
      $('.dominoTokenP1[tokenNumber="'+i+'"]')[0].childNodes[1].innerHTML = this.body[0].number2;
        }


  }
  return this.body;
};


Player.prototype.searchNumber = function(a,b){
  console.log("Buscamos para...: ");
  console.log(this.name);
  console.log("numero a en searchnumber: "+a);
  console.log("numero b en searchnumber: "+b);
  for (i=0;i<this.body.length;i++){
    if ((this.body[i].number1===a && this.body[i].number2===b)||
     (this.body[i].number1===b && this.body[i].number2===a)){
       console.log("numero "+a+"|"+b+" encontrado");
      return true;
    }
  }
  return false;
};



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




Player.prototype.updatePlayerDominoes=function(){
 if (this.name=="player1") {
    for (i=0; i<this.body.length; i++){
      $('.dominoTokenP1[tokenNumber="'+i+'"]')[0].childNodes[0].innerHTML = this.body[i].number1;
      $('.dominoTokenP1[tokenNumber="'+i+'"]')[0].childNodes[1].innerHTML = this.body[i].number2;
    }
    for (i=this.body.length; i<this.MAX_DOMINOES; i++){
      $('.dominoTokenP1[tokenNumber="'+i+'"]')[0].childNodes[0].innerHTML = ' ';
      $('.dominoTokenP1[tokenNumber="'+i+'"]')[0].childNodes[1].innerHTML = ' ';
      $('.dominoTokenP1[tokenNumber='+i+']').removeClass('domino');
    }
  }
  else if (this.name=='player2'){
    for (i=0; i<this.body.length; i++){
      $('.dominoTokenP2[tokenNumber="'+i+'"]')[0].childNodes[0].innerHTML = this.body[i].number1;
      $('.dominoTokenP2[tokenNumber="'+i+'"]')[0].childNodes[1].innerHTML = this.body[i].number2;
    }
    for (i=this.body.length; i<this.MAX_DOMINOES; i++){
      $('.dominoTokenP2[tokenNumber="'+i+'"]')[0].childNodes[0].innerHTML = ' ';
      $('.dominoTokenP2[tokenNumber="'+i+'"]')[0].childNodes[1].innerHTML = ' ';
      $('.dominoTokenP2[tokenNumber='+i+']').removeClass('domino');
    }
  }
};
