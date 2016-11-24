/*
Tres en Raya. El juego del tres en raya consiste en un tablero de 3x3, en el que sucesivamente dos jugadores van marcando casillas hasta conseguir tener sus tres marcas en linea, pudiendo ser esta horizontal, vertical o en diagonal. Se pide por tanto la implementacion de este juego teniendo en cuenta:
1. El juego es pensado para ser usado por dos usuarios.
2. El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigue antes las tres en linea.
*/

class Vista{
    constructor(){
    }
    
    victoria(id){
        mensaje.innerHTML = ('El ganador es ' + id + '\n¡Enhorabuena!');
        this.bloquea();
    }
    empate(){
        mensaje.innerHTML = ('Fin del juego.');
        partida.fin = true;
        this.bloquea();
    }
    
    cambiaMensaje(jugador){
        mensaje.innerHTML = ('Turno de ' + jugador);
    }
    
    bloquea(){
        var casillas = document.getElementsByTagName('td');
        for (var i=0; i < casillas.length; i++){
            casillas[i].onclick = null;
        }
    }
}