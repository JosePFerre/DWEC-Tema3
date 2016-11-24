var ele = document.getElementById('contenido');

function paresImpares(){
    var listaNum =[];
    for (i=0;i<100;i++){
        var x = Math.floor(Math.random()*(1000 - 1)+1);
        if (x % 2 == 0){
            listaNum.unshift(x);
        } else listaNum.push(x);
    }
    return listaNum;
}

ele.innerHTML = paresImpares();