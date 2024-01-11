let notas=[];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo= function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR);
    }
}

ejecutarPromedio = function(){
    let promedio=calcularPromedio();
    mostrarTexto('lblPromedio',promedio);
}
calcularPromedio= function(){
    let sumaNotas=0;
    let promedio;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        sumaNotas= sumaNotas+notaR;
    }
    promedio= sumaNotas/notas.length;
    return promedio;
}

generarTabla = function(){
    let contenidoTabla="";
    let cmpTabla= document.getElementById("divTabla")
    contenidoTabla+="<table><tr><td>UNO</td></tr>"+
    "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla;
}

mostrarNotas = function(){
    let cmpTabla= document.getElementById("divTabla")
    let contenidoTabla= "<table><tr><th>NOTA</th></tr>";
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota= notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

probarAgregar = function(){
    let notaRecuperar;
    notaRecuperar= recuperarInt("txtNota");
    agregarNota(notaRecuperar);
}

agregarNota = function(nota){
    notas.push(nota);
    mostrarNotas();
}

