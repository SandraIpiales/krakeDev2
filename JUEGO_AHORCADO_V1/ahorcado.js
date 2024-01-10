//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta='';
guardarPalabra = function(){
    let palabra = recuperarTexto('txtSecreta');
    let letra;
    let existeMayus=false;
    if(palabra.length==5){
        for(let i=0; i<palabra.length;i++){
            letra=palabra.charAt(i);
            if(esMayuscula(letra)){
                existeMayus=true;
            }else{
                alert('Ingresar una palabra de 5 letras mayúsculas');
            }
        }
    }
    console.log(palabra);
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

