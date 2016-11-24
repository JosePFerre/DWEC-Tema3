var filas = 8;
//prompt('Introduzca el número de filas: ');
//var tablero = document.getElementById('tabla');
//tablero.innerHTML += ('<table>');

function funcion(filas){
//var table = document.getElementById('tablero');
var table = document.createElement('table');
for(let i=0;i<filas;i++){
    //tablero.innerHTML += ('<tr height = 50>');
    var tr = table.insertRow();
    for(let j=0;j<filas;j++){
        var td = tr.insertCell();
        var id = String(i) + String(j);
        td.appendChild(document.createTextNode(id));
        //tablero.innerHTML += ('<td width = 50></td>');
    }
}
    document.getElementById('caja').appendChild(table);
}
//cell1.innerHTML = ('jaja');
//tablero.innerHTML += ('</tr></table>');
//document.write(tablero.innerHTML);
/*
for(i=0;i<filas;i++){
    document.write('<table border=\'1\'>');
    document.write(`<tr height = ${altura}>`);
    for(j=0;j<filas;j++){
        document.write(`<td width = ${anchura}> </td>`);
    }
document.write('</tr></table>');
}*/

window.onload = function(){
    funcion(filas);
}