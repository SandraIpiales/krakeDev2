esMayuscula = function( caracter ){
    let codAscci= caracter.charCodeAt("0");
    let letraMays;
    if(codAscci>=65&&codAscci<=90){
        letraMays= true;
    }else{
        letraMays= false;
    }
    return letraMays;
}

esDigito = function(caracter){
    let codAscci= caracter.charCodeAt("0");
    let digito;
    if(codAscci>=48&&codAscci<=57){
        digito= true;
    }else{
        digito= false;
    }
    return digito;
}

esGuion = function(caracter){
    let codAscci= caracter.charCodeAt("0");
    let guion;
    if(codAscci==45){
        guion= true;
    }else{
        guion= false;
    }
    return guion;
}