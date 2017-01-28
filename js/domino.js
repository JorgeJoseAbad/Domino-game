// hay 28 fichas en una caja o conjuto arrqy de fichas:

function Dominobox(options) {
  //posicion inicial ordenada de las fichas de domino en la caja
  this.body = [
      {number1:0,number2:0},
      {number1:0,number2:1},
      {number1:0,number2:2},
      {number1:0,number2:3},
      {number1:0,number2:4},
      {number1:0,number2:5},
      {number1:0,number2:6},
      {number1:1,number2:1},
      {number1:1,number2:2},
      {number1:1,number2:3},
      {number1:1,number2:4},
      {number1:1,number2:5},
      {number1:1,number2:6},
      {number1:2,number2:2},
      {number1:2,number2:3},
      {number1:2,number2:4},
      {number1:2,number2:5},
      {number1:2,number2:6},
      {number1:3,number2:3},
      {number1:3,number2:4},
      {number1:3,number2:5},
      {number1:3,number2:6},
      {number1:4,number2:4},
      {number1:4,number2:5},
      {number1:4,number2:6},
      {number1:5,number2:5},
      {number1:5,number2:6},
      {number1:6,number2:6},
      ];
}

// barajar las fichas
Domino.prototype.shuffle = function () {
  this.body.sort(function(a, b){
    return 0.5 - Math.random();
  });
};


//coger una ficha del principio, para comprobr por ejemplo
Domino.prototype.getDomino= function(){
  this.body.shift();
};

//dejar una ficha al final
Domino.prototype.letDomino = function () {
  this.body.push(item);
};

//Comprobar numero de una ficha retorna true si el numero buscado esta
//no esto lo hara el juego
/*Domino.prototype.checkNumber=function(number){
  this.body.(function(number)){
    return (item.number1===number || item.number2===number);
  };
};*/
