jugar = function(){
   let aleatorio;
   let mensaje;
   let mensaje2;
   aleatorio= lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if(aleatorio>3){
        mensaje="Es mayor a 3";
        mensaje2="GANASTE";
    }else{
        mensaje="Es menor a 3";
        mensaje2="PERDISTE";
    }
    cambiarTexto("lblResultado", mensaje );
    cambiarTexto("lblMensaje", mensaje2 );
}

//Crear una funcion llamada lanzarDado
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6
lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random(); // entre 0 y 1;
    numeroMultiplicado= aleatorio*6;
    numeroEntero= parseInt(numeroMultiplicado);//entre 0 y 5
    valorDado= numeroEntero+1; //entre 0 y 6
    
    return valorDado;
}