validarEstructura = function (placa) {
    let letra;
    let hayError = false;
    let ultimaPosicion = placa.length - 1;
    let numCaracter = "";
    let caracterMays = "";
    let guion = "";
    let digito = "";

    if (placa.length >= 7 && placa.length <= 8) {
        for (i = 0; i <= 2; i++) {
            letra = placa.charAt(i);
            if (!esMayuscula(letra)) {
                let numMay = i + 1;
                caracterMays = caracterMays + " El " + numMay + " caracter debe estar en Mayuscula";
                hayError = true;
            }
        }
        if (!esGuion(placa.charAt(3))) {
            guion = "El cuarto caracter debe ser un guion";
            hayError = true;
        }
        for (j = 4; j <= ultimaPosicion; j++) {
            letra = placa.charAt(j);
            if (!esDigito(letra)) {
                let num = j + 1;
                digito = digito + "El " + num + " caracter debe ser un Digito";
                hayError = true;
            }
        }

    } else {
        numCaracter = "La placa debe tener 7 u 8 caracteres"
        hayError = true;
    }

    if (hayError) {
        return numCaracter + " " + caracterMays + " " + guion + " " + digito;
    } else {
        return null;
    }
}

obtenerProvincia = function (placa) {
    let letra = placa.charAt(0);
    let provincia = null;
    if (letra == 'A') {
        provincia = "Azuay";
    } else if (letra == 'B') {
        provincia = "Bolívar";
    } else if (letra == 'U') {
        provincia = "Cañar";
    } else if (letra == 'C') {
        provincia = "Carchi";
    } else if (letra == 'X') {
        provincia = "Cotopaxi";
    } else if (letra == 'H') {
        provincia = "Chimborazo";
    } else if (letra == 'O') {
        provincia = "El Oro";
    } else if (letra == 'E') {
        provincia = "Esmeraldas";
    } else if (letra == 'W') {
        provincia = "Galápagos";
    } else if (letra == 'G') {
        provincia = "Guayas";
    } else if (letra == 'I') {
        provincia = "Imbabura";
    } else if (letra == 'L') {
        provincia = "Loja";
    } else if (letra == 'R') {
        provincia = "Los Ríos";
    } else if (letra == 'M') {
        provincia = "Manabí";
    } else if (letra == 'V') {
        provincia = "Morona Santiago";
    } else if (letra == 'N') {
        provincia = "Napo";
    } else if (letra == 'S') {
        provincia = "Pastaza";
    } else if (letra == 'P') {
        provincia = "Pichincha";
    } else if (letra == 'K') {
        provincia = "Sucumbíos";
    } else if (letra == 'Q') {
        provincia = "Orellana";
    } else if (letra == 'T') {
        provincia = "Tungurahua";
    } else if (letra == 'Z') {
        provincia = "Zamora Chinchipe";
    } else if (letra == 'Y') {
        provincia = "Santa Elena";
    }
    return provincia;
}

obtenerTipoVehiculo = function (placa) {
        let letra = placa.charAt(1);
        let tipoVehiculo = null;
        if (letra == 'A' || letra == 'Z') {
            tipoVehiculo = "Vehiculo Comercial";
        } else if (letra == 'E') {
            tipoVehiculo = "Vehiculo Gubernamental";
        } else if (letra == 'X') {
            tipoVehiculo = "Vehiculo ded Uso Oficial";
        } else if (letra == 'S') {
            tipoVehiculo = "Vehiculo de Gobierno Provincial";
        } else if (letra == 'M') {
            tipoVehiculo = "Vehiculo Municipal";
        } else {
            tipoVehiculo = "Vehiculo Particular";
        }
        return tipoVehiculo;

    }