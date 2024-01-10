//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
guardarPalabra = function(){
    let palabra = recuperarTexto('txtSecreta');
    let letra;
    let existeMayus=false;
    let existeMin=false;
    
    if(palabra.length==5){
        for(let i=0; i<palabra.length;i++){
            letra=palabra.charAt(i);
            if(esMayuscula(letra)){
                existeMayus=true;
            }else{
                existeMin=true;
            }
        }
    }
    if(existeMayus==true&existeMin==false){
        palabraSecreta=palabra;
        console.log(palabraSecreta);
    }else{
        alert('Ingresar una palabra de 5 letras mayúsculas');

    }
    
}

esMayuscula = function(caracter){
    let codAscci= caracter.charCodeAt("0");
    let letraMays;
    if(codAscci>=65&&codAscci<=90){
        letraMays= true;
    }else{
        letraMays= false;
    }
    return letraMays;
}

mostrarLetra = function(letra,posicion){
    if(posicion==0){
        mostrarTexto('div0',letra);
    }else if(posicion==1){
        mostrarTexto('div1',letra);
    }else if(posicion==2){
        mostrarTexto('div2',letra);
    }else if(posicion==3){
        mostrarTexto('div3',letra);
    }else if(posicion==4){
        mostrarTexto('div4',letra);
    }
    

}

validar= function(letra){
    let letrasEncontradas=0;
    let letraCadena;
    for ( let i=0; i<palabraSecreta.length;i++){
        letraCadena=palabraSecreta.charAt(i);
        if(letraCadena==letra){
            mostrarLetra(letra,i);
            letrasEncontradas++;
        }
    }
}