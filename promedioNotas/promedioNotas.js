calcularPromedioNotas = function(){
    let valorNota1;
    let valorNota2;
    let valorNota3;
    let promedio;
    let promedioFormateado;
    valorNota1 = recuperarFloat("txtNota1");
    valorNota2 = recuperarFloat("txtNota2");
    valorNota3 = recuperarFloat("txtNota3");
    promedio=calcularPromedio(valorNota1,valorNota2,valorNota3);
    promedioFormateado = promedio.toFixed(2);
    mostrarTexto("lblPromedio", promedioFormateado);
    if(promedioFormateado<5 && promedioFormateado>0){
        mostrarTexto("lblResultado", "REPROBADO");
        mostrarImagen("imgResultado", "./imagenes/fracaso.gif");
    }else if(promedioFormateado>=5 && promedioFormateado<=8){
        mostrarTexto("lblResultado", "BUEN TRABAJO");
        mostrarImagen("imgResultado", "./imagenes/exito.gif");
    }else if(promedioFormateado>8 && promedioFormateado<=10){
        mostrarTexto("lblResultado", "EXCELENTE");
        mostrarImagen("imgResultado", "./imagenes/excelente.gif");
    }else{
        mostrarTexto("lblResultado", "DATOS INCORRECTOS");
        mostrarImagen("imgResultado", "./imagenes/datosIncorrectos.gif")
    }

}