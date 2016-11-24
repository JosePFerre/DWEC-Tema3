/*Puzzle. Se desea implementar una web para la realizacion de puzzles. Un puzzle no es mas que un tablero cuadrado con un hueco que podemos mover y que permite  reordenar las piezas. Se pide por tanto la implementacion de una clase que represente  este juego teniendo en cuenta:
1. La dimension puede variar, se escoger en la creacion.
2. El espacio en blanco solo se mueve arriba, abajo, izquierda, derecha, controlando por supuesto que sea un movimiento valido.
3. Debe llevarse un control del tiempo minimo para resolverlo, asi como el numero de movimientos realizados.
4. Los tableros se generaran aleatoriamente.
5. Implementaras un metodo dibujar() que imprimira en pantalla el tablero para poder ser probado.*/


class Vista{
    constructor(){
    }
    
    genera_tablero(){
        var filas = prompt('Introduzca número de filas:');
        var tablero = document.createElement('table');
        var lista_ganadora = [];
        for(let i=0;i<filas;i++){
            var fila = tablero.insertRow();
            for(let j=0;j<filas;j++){
                var casilla = fila.insertCell();
                var id = String(i) + String(j);
                casilla.setAttribute('id', id);
                casilla.appendChild(document.createTextNode(id));
                if (id != '00'){
                    lista_ganadora.push(id);
                }
            }
        }
        document.getElementById('caja').appendChild(tablero);
        return lista_ganadora;
    }
}

var view = new Vista();