saludar = function(){
    //recuperar el valor de la caja de texto 
    let nombre= recuperarTexto("txtNombre");
    let apellido= recuperarTexto("txtApellido");
    let edad= recuperarInt("txtEdad");
    let estatura= recuperarFloat("txtEstatura");
    let mensajeBienvenida= "Bienvenido "+ nombre+" Apellido "+ apellido;
    mostrarTexto("lblResultado", mensajeBienvenida);
    mostrarImagen("imgSaludo", "./imagenes/saludo.gif");

    mostrarTextoEnCaja('txtNombre',"");
}
mostrarImagen = function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
}

mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}
mostrarTexto = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado= componente.value; 
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorCaja);
    return valorFloat;
}
