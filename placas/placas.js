validarPlaca = function(){
    let placa;
    let validar;
    placa=recuperarTexto("txtPlaca");
    validar=validarEstructura(placa);
    if(validar==null){
        mostrarTexto("lblEstructura", "ESTRUCTURA VALIDA");
        mostrarTexto("lblError", "");
        let nombreProv=obtenerProvincia(placa);
        if(nombreProv!=null){
            mostrarTexto("lblProvincia", nombreProv);
        }else{
            mostrarTexto("lblProvincia", "Provincia Incorrecta");
        }
        let tipoVehiculo= obtenerTipoVehiculo(placa);
        if(tipoVehiculo!=null){
            mostrarTexto("lblTipo", tipoVehiculo);
        }else{
            mostrarTexto("lblTipo", "Tipo de Vehiculo Incorrecto");
        }
    }else{
        mostrarTexto("lblEstructura", "ESTRUCTURA INCORRECTA");
        mostrarTexto("lblError", validarEstructura(placa));
        mostrarTexto("lblProvincia", "");

    }
}


        