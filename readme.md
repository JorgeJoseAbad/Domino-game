DOMINO

with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

Se ha empleado fundamentalmente JavaScript y jQuery. Sobre una estructura DOM en HTML y formatos CSS

El juego incluye:

Una clase Game, que gestiona el juego,

Una clase Domino, instanciada en dominobox, que da forma a una caja de fichas de dominó. Esta "caja" es un array de 28 objetos, cada objeto es una ficha de dominó, en la que incluye los dos numeros de la ficha, su estado abierto o cerrado
    (si está libre para poner la siguiente ficha, abierto) y la posición de los dos números de la ficha.

Una clase Player, que genera dos instancias, player1 y player2. Cada player tiene un array de objetos-ficha de dominó con un máximo de 8 de ellas.

Una clase Board, la "mesa" sobre la que se desarrolla el juego, las fichas se disponen en una matriz bidimensional y se enlazan con un array en el que se podrán introducir por ambos extremos. Se muestra la posición de las fichas.

El juego comienza reordenando aleatoriamente las fichas de la dominobox. Seguidamente entrega 8 fichas a player1 y player2. Se da valor de turno a Player1, y para arrancar el juego de modo automático se busca si player1 o player2 tienen el 6 doble, en cuyo caso lo ponen en dominoBoard, o si no lo tienen en cuyo caso Player1 pone una ficha por defecto. El jugador que pone pasa el turno al otro, y comienzan movimientos manuales de fichas.
