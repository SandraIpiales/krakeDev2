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
}