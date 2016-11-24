var ele = document.getElementById('contenido');

function creaContador(){
    var listaNum =[];
    for (i=0;i<=10;i++){
        listaNum.push(0);
    }
    return listaNum;
}

function cuentaCombinaciones(){
    var dado = [1,2,3,4,5,6];
    var contador = creaContador();
    for(i=0;i<36000;i++){
        var tiro1 = dado[Math.floor(Math.random() * dado.length)];
        var tiro2 = dado[Math.floor(Math.random() * dado.length)];
        switch (tiro1 + tiro2){
            case 2:
                contador[0]++;
                break;
            case 3:
                contador[1]++;
                break;
            case 4:
                contador[2]++;
                break;
            case 5:
                contador[3]++;
                break;
            case 6:
                contador[4]++;
                break;
            case 7:
                contador[5]++;
                break;
            case 8:
                contador[6]++;
                break;
            case 9:
                contador[7]++;
                break;
            case 10:
                contador[8]++;
                break;
            case 11:
                contador[9]++;
                break;
            case 12:
                contador[10]++;
                break;
        }
    }
    return contador;
}

ele.innerHTML = cuentaCombinaciones();