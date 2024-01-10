mostrarNumeros = function () {
    console.log("antes del for");
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log("despues del for");
}

mostrarNumeros2 = function () {
    console.log("antes del for");
    for (let indice = 1; indice <= 5; indice++) {
        console.log(indice);
    }
    console.log("despues del for");
}

mostrarPares = function () {
    console.log("antes del for");
    for (let x = 2; x <= 10; x += 2) {
        console.log(x);
    }
    console.log("despues del for");

}

mostrarImpares = function () {
    console.log("antes del for");
    for (let x = 1; x <= 21; x += 2) {
        console.log(x);
    }
    console.log("despues del for");

}

mostrarInverso = function () {
    console.log("antes del for");
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
    console.log("despues del for");

}

hackerNasaPelis = function () {
    //hackeando nasa 0% ..... 100%
    for (let porcentaje = 0; porcentaje <= 100; porcentaje += 10) {
        console.log("hackeando nasa " + porcentaje + "%");
    }
    console.log("La nasa a sido hackeada XD")
}

buscarLetra = function (cadena,letra) {
    let letraIterada;
    let existeLetra=false;
    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if(letraIterada==letra){
            existeLetra= true;
        }
    }
    if(existeLetra==true){
        return true;
    }else{
        return false;
    }
}


contarMayusculas = function(cadena){
    let letra;
    let contadorMayuscula=0;
    for( let i =0; i <cadena.length;i++){
        letra= cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayuscula= contadorMayuscula+1;
        }
    }
    console.log(contadorMayuscula);
}