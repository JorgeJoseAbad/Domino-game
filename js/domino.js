
function Dominobox(options) {
  
  this.body = [
      { number1:0,
        number2:0,
        number1Open:true,
        number2Open:true,
        number1Pos:{
          row:100,
          column:100,},
        number2Pos:{
          row:100,
          column:100,}
      },
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


}


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



Dominobox.prototype.shuffle = function () {
  this.body.sort(function(a, b){
    return 0.5 - Math.random();
  });
};



var dominobox = new Dominobox({

});




Dominobox.prototype.getDomino= function(){
  this.body.shift();
};


Dominobox.prototype.letDomino = function () {
  this.body.push(item);
};
