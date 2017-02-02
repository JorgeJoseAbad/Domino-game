// hay 28 fichas en una caja o conjuto arrqy de fichas:
//cada ficha tiene dos numeros, indicaca si cada numero esta open (no esta cerrado, inicialmente todos open)
//cada dicha tiene row & column para cada numero.
//permite barajar las fichas en la caja
//permite tomar una ficha del comienzo
//permite poner una ficha al final

function Dominobox(options) {
  //posicion inicial ordenada de las fichas de domino en la caja
  this.body = [
      {number1:0,number2:0,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:0,number2:1,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:0,number2:2,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:0,number2:3,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:0,number2:4,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:0,number2:5,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:0,number2:6,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:1,number2:1,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:1,number2:2,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:1,number2:3,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:1,number2:4,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:1,number2:5,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:1,number2:6,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:2,number2:2,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:2,number2:3,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:2,number2:4,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:2,number2:5,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:2,number2:6,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:3,number2:3,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:3,number2:4,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:3,number2:5,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:3,number2:6,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:4,number2:4,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:4,number2:5,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:4,number2:6,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:5,number2:5,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:5,number2:6,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      {number1:6,number2:6,number1Open:true,number2Open:true,
      number1Pos:{row:100,column:100,},number2Pos:{row:100,column:100,}},
      ];

      // this.shuffle();
}

//funcion para imprimir las fichas OK
Dominobox.prototype.print = function() {
  var pieces = [];
  for (var i = 0; i < this.body.length; i++) {
    var piece = this.body[i];
    pieces.push(
      piece.number1 + " | " + piece.number2
    );
  }
  console.log(pieces.join("   -   "));
};


// barajar las fichas OK
Dominobox.prototype.shuffle = function () {
  this.body.sort(function(a, b){
    return 0.5 - Math.random();
  });
};



var dominobox = new Dominobox({

});



//coger una ficha del principio, para comprobr por ejemplo
Dominobox.prototype.getDomino= function(){
  this.body.shift();
};

//dejar una ficha al final
Dominobox.prototype.letDomino = function () {
  this.body.push(item);
};
