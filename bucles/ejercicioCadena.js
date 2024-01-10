ejercutarPrueba1= function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejercutarPrueba2= function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    
    mostrarTexto('lblResultado', recorrerCadenaInversa(mensaje));
}

recorrerCadena = function(cadena){
    //0123
    //Juan
    let caracter;
    for(let posicion = 0; posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter: "+caracter+ "posicion "+posicion);
    }

    for(let posicion = 0; posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER: "+caracter+ "posicion "+posicion);
    }
}

recorrerCadenaInversa = function(cadena){
    let caracter;
    let ultimaPosicion=cadena.length-1;
    let caracterInverso="";
    for(let posicion = ultimaPosicion; posicion>=0;posicion--){
        caracter=cadena.charAt(posicion);
        caracterInverso= caracterInverso+ caracter ; 
        console.log("Caracter: "+caracter+ "posicion "+posicion);
    }
    return caracterInverso;
}

buscarLetra= function(cadena, letra){
    let letraIterada;
    let existeLetra=false;
    for(let i=0; i<cadena.length;i++){
        letraIterada= cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra=true;
        }
    }
    if(existeLetra==true){
        return true;
    }else{
        return false;
    }
}