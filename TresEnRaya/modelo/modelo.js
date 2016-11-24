/*
Tres en Raya. El juego del tres en raya consiste en un tablero de 3x3, en el que sucesivamente dos jugadores van marcando casillas hasta conseguir tener sus tres marcas en linea, pudiendo ser esta horizontal, vertical o en diagonal. Se pide por tanto la implementacion de este juego teniendo en cuenta:
1. El juego es pensado para ser usado por dos usuarios.
2. El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigue antes las tres en linea.
*/

class Partida{
    /*Controla los cambios de turno y las jugadas*/
    constructor(){
        this.tablero = [0,0,0,0,0,0,0,0,0];
        this.turno = this.primerTurno();
        this.fin = false;
    }
    
    primerTurno(){
        if(Math.random() <= 0.5){
            return j1.id;
        }else {
            return j2.id;
           }
    }
    
    cambiaTurno(){
        if (this.turno == j1.id){
            this.turno = j2.id;
            v.cambiaMensaje(j2.id);
        } else{ 
            this.turno = j1.id;
            v.cambiaMensaje(j1.id);
        }
    }
    
    jugada(casilla, posicion){
        if (this.turno == j1.id && partida.tablero[posicion] == 0){
            casilla.innerHTML = '<img src=\"imgX.jpg\">';
            partida.tablero[posicion] = 1;
            this.cambiaTurno(j1.id);
            comp.comprueba(partida);
        } else if (this.turno == j2.id && partida.tablero[posicion] == 0){
            casilla.innerHTML = ('<img src=\"imgO.jpg\">');
            partida.tablero[posicion] = 2;
            this.cambiaTurno(j2.id);
            comp.comprueba(partida);
        }
    }
}

class Jugador{
    /*Los dos jugadores de la partida*/
    constructor(id){
        this.id = id;
    }
}


class comprobador{
    /*Comprueba el resultado de la partida.*/
    constructor(){
        this.combinacionesGanadoras = [[0,1,2], [0,4,8],
					[6,4,2], [0,3,6], [1,4,7], [2,5,8], [3,4,5],[6,7,8]];
    }
    
    comprueba(partida){
        for (var x of this.combinacionesGanadoras){
            if ((partida.tablero[x[0]] == 1) && (partida.tablero[x[1]] == 1) && (partida.tablero[x[2]] == 1)){
                v.victoria(j1.id);
                partida.fin = true;
            } else if ((partida.tablero[x[0]] == 2) && (partida.tablero[x[1]] == 2) && (partida.tablero[x[2]] == 2)){
                v.victoria(j2.id);
                partida.fin = true;
            } else if (partida.tablero.every(function(pos){
                return pos != 0}) && (partida.fin == false)){
                v.empate();
            }
        }
    }
}

/*Cargas iniciales del programa*/
var j1 = new Jugador('Jose');
var j2 = new Jugador('Pepe');
var partida = new Partida;
var comp = new comprobador;
var v = new Vista();

window.onload = function(){
    v.cambiaMensaje(partida.turno);
}