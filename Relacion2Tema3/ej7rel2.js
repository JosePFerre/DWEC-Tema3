var ele = document.getElementById('contenido');

function creaArray(){
    var listaNum =[];
    for (i=0;i<10;i++){
        listaNum.push(Math.floor(Math.random()*(100 - 1)+1));
    }
    return listaNum;
}

var lista = creaArray();

function todoACero(){
    for (i=0;i<lista.length;i++){
        lista[i] = 0;
    }
    return lista;
}
//ele.innerHTML = todoACero();

function sumaUno(){
    for (i=0;i<lista.length;i++){
        lista[i] = lista[i] + 1;
    }
    return lista;
}
//ele.innerHTML = sumaUno();

function añadeEspacios(){
    listaCadena = lista.join(' ');
    return listaCadena;
}

ele.innerHTML = añadeEspacios();