let puntos=0;
let lanzamientos=5;
jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamiento();
    
}

modificarPuntos= function(numero){
    cambiarTexto("lblEtiqueta", "");
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    //Si el jugador obtiene masde 20  puntos
    if(puntos >20){
        cambiarTexto("lblEtiqueta", "GANASTE");
        limpiar();
    }
    
    // mostrar en pantalla un mensaje GANASTE!! 
    //Colocar puntaje en 0 ylanzamientos en 5 
    //invocar a limpiar
    
}

//no recibe Parametros
//resta 1 a lavariablelanzamiento,g guardar el resultado en la misma variable.
//y muestra en pantalla 

modificarLanzamiento= function(){
//  si lanzamientos llega a 0
lanzamientos=lanzamientos-1;
cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos==0){
        cambiarTexto("lblEtiqueta", "GAME OVER");
        limpiar();
    }
    
//mostrar en pantalla el mensaje  GAME OVER
//invocar a limpiar 
}

limpiar = function(){
    puntos=0;
    lanzamientos=5;
    cambiarTexto("lblPuntos",puntos);
    cambiarTexto("lblLanzamientos",lanzamientos)
    cambiarImagen("imgDado","");


}
//funcion  mostrarCara,recibe el numero que quiere mostrar
//muestra la imagen corresponfiente al numero que recive
// no retorna nada 

mostrarCara= function(numero){
 if (numero == 1){ /// con == se compara, mientras que con = se asigna 
    cambiarImagen("imgDado","dados1.png");
 }else if(numero == 2){
    cambiarImagen("imgDado","dados2.png");
 }else if(numero == 3){
    cambiarImagen("imgDado","dados3.png");
 }else if(numero == 4){
    cambiarImagen("imgDado","dados4.png");
 }else if(numero == 5){
    cambiarImagen("imgDado","dados5.png");
 }else if(numero == 6){
    cambiarImagen("imgDado","dados6.png");
 }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}