calcularTasaInteres = function(ingresoAnual) {
    let tasaInteres;
    if(ingresoAnual<300000){
        tasaInteres = 16;
    } else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres=15;
    } else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres=14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres=13;
    }else if(ingresoAnual>=2000000 ){
        tasaInteres=12;
    }
    return tasaInteres;
}

calcularCapacidadPago = function(edad, ingresos, egresos){
    let capacidad;
    if(edad>50){
        capacidad= ((ingresos -egresos)*30)/100;
    }else{
        capacidad= ((ingresos -egresos)*40)/100;
    }
    return capacidad;
}

calcularDescuento = function(precio, cantidad){
    let valorDescuento;
    let precioPago;
    if(cantidad<3){
        valorDescuento=0;
    }else if(cantidad>=3 && cantidad<=5){
        valorDescuento=2;
    }else if(cantidad>=6 && cantidad<=11){
        valorDescuento=3;
    }else if(cantidad>=12){
        valorDescuento=4;
    }

    precioPago= precio-((precio*valorDescuento)/100);
    return precioPago;
}

determinarColesterolILDL = function( nivelColesterol){
    let resultadosNivelDeColesterol;
    if(nivelColesterol<100){
        resultadosNivelDeColesterol="Óptimo (lo mejor para su salud)";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        resultadosNivelDeColesterol="Casi Óptimo";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        resultadosNivelDeColesterol="Límite superior del rango normal";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        resultadosNivelDeColesterol="Alto";
    }else if(nivelColesterol>=190){
        resultadosNivelDeColesterol="Muy Alto";
    }
    return resultadosNivelDeColesterol;
}

validarClave = function( clave){
    let numCaracter= clave.length;
    let validar;
    if(numCaracter>=8 && numCaracter<=16){
        validar= true;
    }else{
        validar=false;
    }

}

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

esMinuscula = function(caracter){
    let codAscci= caracter.charCodeAt("0");
    let letraMins;
    if(codAscci>=97&&codAscci<=122){
        letraMins= true;
    }else{
        letraMins= false;
    }
    return letraMins;
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

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    let permiso;
    if(notaMatematica>90|| notaFisica>90|| notaGeometria>90){
        permiso= true;
    }else{
        permiso=false;
    }

    return permiso;
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    let permiso;
    if(notaMatematica>90|| notaFisica>90 && notaGeometria>80){
        permiso= true;
    }else{
        permiso=false;
    }

    return permiso;
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    let salida;
    if(notaMatematica>90|| notaFisica>90 || notaGeometria>90){
        if(notaFisica>notaMatematica){
            salida= true;
        }
    }else{
        salida=false;
    }

    return salida;
}