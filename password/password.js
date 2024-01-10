
validarPassword = function(password){
    let letra;
    let existeMayus=false;
    let existeDigito=false;
    let existeCaracterEspecial=false;
    let codAscci;
    let errores="";
    if(password.length>=8 && password.length<=16){
        for( let i=0;i<password.length; i++){
            letra=password.charAt(i);
            codAscci=password.charCodeAt(i);
            if(esMayuscula(letra)){
                existeMayus=true;
            }
            if(esDigito(letra)){
                existeDigito=true;
            }
            if(codAscci==42 ||codAscci==45||codAscci==95){
                existeCaracterEspecial=true;
            }
        }
        
    }
    if(!existeMayus){
        errores='Debe tener al menos una letra Mayúscula';
    }
    if(!existeDigito){
        errores=errores+'Debe tener al menos un Dígito';
    }
    if(!existeCaracterEspecial){
        errores=errores+'Debe tener al menos un Caracter Especial';
    }
    return errores;
}

ejecutarValidacion = function(){
    let password= recuperarTexto('txtPassword');
    let validar=validarPassword(password);
    if(validar.length>0){
        mostrarTexto('lblResultado', 'PASSWORD INCORRECTO');
    }else{
        mostrarTexto('lblResultado', 'PASSWORD CORRECTO');
    }
}