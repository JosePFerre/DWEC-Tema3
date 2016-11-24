var ele = document.getElementById('contenido');

function cuentaCombinaciones(){
    var dado = [1,2,3,4,5,6];
    var contador = [['2: ', 0], ['3: ', 0], ['4: ', 0], ['5: ', 0], ['6: ', 0], ['7: ', 0], ['8: ', 0], ['9: ', 0], ['10: ', 0], ['11: ', 0], ['12: ', 0]];
    for(i=0;i<36000;i++){
        var tiro1 = dado[Math.floor(Math.random() * dado.length)];
        var tiro2 = dado[Math.floor(Math.random() * dado.length)];
        switch (tiro1 + tiro2){
            case 2:
                contador[0][1]++;
                break;
            case 3:
                contador[1][1]++;
                break;
            case 4:
                contador[2][1]++;
                break;
            case 5:
                contador[3][1]++;
                break;
            case 6:
                contador[4][1]++;
                break;
            case 7:
                contador[5][1]++;
                break;
            case 8:
                contador[6][1]++;
                break;
            case 9:
                contador[7][1]++;
                break;
            case 10:
                contador[8][1]++;
                break;
            case 11:
                contador[9][1]++;
                break;
            case 12:
                contador[10][1]++;
                break;
        }
    }
    return contador;
}

ele.innerHTML = cuentaCombinaciones();