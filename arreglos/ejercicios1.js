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
probarAgregar = function(){
    let notaRecuperar;
    notaRecuperar= recuperarInt("txtNota");
    agregarNota(notaRecuperar);
}

agregarNota = function(nota){
    notas.push(nota);
}

