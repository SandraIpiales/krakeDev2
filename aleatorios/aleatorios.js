generarAleatorios = function(){
    let aleatorios=[];
    let numero;
    let numIngresado= recuperarInt('txtNumero');
    if(numIngresado>4&&numIngresado<21){
        for(let i=0; i <numIngresado;i++){
            numero=numAleatorio();
            aleatorios.push(numero);
            console.log(i);
        }
        mostrarResultados(aleatorios);
    }else{
        alert("El número debe ser de 5 a 20");
    }

}

mostrarResultados = function(arregloNumeros){
    let cmpTabla= document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NUMEROS ALEATORIOS</th></tr>";
    let numero;
    for(let i=0; i<arregloNumeros.length;i++){
        numero= arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=numero;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}

numAleatorio = function(){
    let numeroAleatorio= Math.floor(Math.random()*100)+1;
    return numeroAleatorio;
}

