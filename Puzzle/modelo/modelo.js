/*Puzzle. Se desea implementar una web para la realizacion de puzzles. Un puzzle no es mas que un tablero cuadrado con un hueco que podemos mover y que permite  reordenar las piezas. Se pide por tanto la implementacion de una clase que represente  este juego teniendo en cuenta:
1. La dimension puede variar, se escoger en la creacion.
2. El espacio en blanco solo se mueve arriba, abajo, izquierda, derecha, controlando por supuesto que sea un movimiento valido.
3. Debe llevarse un control del tiempo minimo para resolverlo, asi como el numero de movimientos realizados.
4. Los tableros se generaran aleatoriamente.
5. Implementaras un metodo dibujar() que imprimira en pantalla el tablero para poder ser probado.*/

class Partida{
    constructor(){
        this.tablero = view.genera_tablero();
    }
    
    asigna_funcion(){
        for (let casilla of this.tablero){
           document.getElementById('00').setAttribute('onclick','alert("jeje")'); document.getElementById(casilla).setAttribute('onclick','alert("jaja")');
        }
    }
    
    movimiento(){
        //if (document.getElementById('00'))
    }
}

window.onload = function(){
    var p = new Partida();
    p.asigna_funcion();
}