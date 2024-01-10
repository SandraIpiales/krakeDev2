//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = '';
let intentos = 0;
let coincidencias = 0;
let error = 0;

guardarPalabra = function () {
    let palabra = recuperarTexto('txtSecreta');
    let letra;
    let existeMayus = false;
    let existeMin = false;

    if (palabra.length == 5) {
        for (let i = 0; i < palabra.length; i++) {
            letra = palabra.charAt(i);
            if (esMayuscula(letra)) {
                existeMayus = true;
            } else {
                existeMin = true;
            }
        }
    }
    if (existeMayus == true & existeMin == false) {
        palabraSecreta = palabra;
        console.log(palabraSecreta);
    } else {
        alert('Ingresar una palabra de 5 letras mayúsculas');

    }

}

esMayuscula = function (caracter) {
    let codAscci = caracter.charCodeAt("0");
    let letraMays;
    if (codAscci >= 65 && codAscci <= 90) {
        letraMays = true;
    } else {
        letraMays = false;
    }
    return letraMays;
}

mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto('div0', letra);
    } else if (posicion == 1) {
        mostrarTexto('div1', letra);
    } else if (posicion == 2) {
        mostrarTexto('div2', letra);
    } else if (posicion == 3) {
        mostrarTexto('div3', letra);
    } else if (posicion == 4) {
        mostrarTexto('div4', letra);
    }


}

validar = function (letra) {
    let letrasEncontradas = 0;
    let letraCadena;
    let letraEncontrada = false;
    for (let i = 0; i < palabraSecreta.length; i++) {
        letraCadena = palabraSecreta.charAt(i);
        if (letraCadena == letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
            coincidencias++;
            letraEncontrada = true;
        }
    }
    if (letraEncontrada != true) {
        alert('LA LETRA NO ES PARTE DE LA PALABRA');
        error++;
        mostrarAhorcado(error);


    }
    
}

ingresarLetra = function () {
    let letra = recuperarTexto('txtLetra');
    intentos++;
    if (esMayuscula(letra)) {
        validar(letra);
        if (coincidencias == 5) {
            mostrarImagen('ahorcadoImagen', './ganador.gif')
        } else if (intentos == 10) {
            mostrarImagen('ahorcadoImagen', './gameover.gif');
        }
    } else {
        alert('SOLO SE ACEPTAN MAYUSCULAS');
    }
}
mostrarAhorcado = function () {
    if (error == 1) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_01.png');
    } else if (error == 2) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_02.png');
    } else if (error == 3) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_03.png');
    } else if (error == 4) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_04.png');
    } else if (error == 5) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_05.png');
    } else if (error == 6) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_06.png');
    } else if (error == 7) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_07.png');
    } else if (error == 8) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_08.png');
    } else if (error == 9) {
        mostrarImagen('ahorcadoImagen', './Ahorcado_09.png');
    }
}