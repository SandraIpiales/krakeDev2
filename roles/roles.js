let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1001632123", nombre: "Mario", apellido: "Martinez", sueldo: 400.0 }
]
let esNuevo = false;

ejercutarNuevo = function () {
    esNuevo = true;
    habilitarComponente('txtCedula');
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar');
}
buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    if (buscarEmpleado(empleado.cedula) == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }

}

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    let empleadoNuevo;
    if (esCedulaValido(valorCedula) & esNombreValido(valorNombre, 'lblErrorNombre') & esApellidoValido(valorApellido, 'lblErrorApellido') & esSueldoValido(valorSueldo, 'lblErrorSueldo')) {
        if (esNuevo) {
            let empleado = {}
            empleado.cedula = valorCedula;
            empleado.nombre = valorNombre;
            empleado.apellido = valorApellido;
            empleado.sueldo = valorSueldo;
            empleadoNuevo = agregarEmpleado(empleado);
            if (empleadoNuevo) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarComponente('txtCedula');
                deshabilitarComponente('txtNombre');
                deshabilitarComponente('txtApellido');
                deshabilitarComponente('txtSueldo');
                deshabilitarComponente('btnGuardar');
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA: " + empleado.cedula);

            }
        }
    }


}
esSueldoValido = function (sueldo, componente) {
    let valido;
    if (sueldo >= 400 && sueldo <= 5000) {
        valido = true;
        mostrarTexto(componente, "");
    } else {
        valido = false;
        if (isNaN(sueldo)) {
            mostrarTexto(componente, "CAMPO OBLIGATORIO");
        } else {
            mostrarTexto(componente, "Sueldo entre 400.0 y 5000.0");
        }

    }
    return valido;
}

esApellidoValido = function (apellido, componente) {
    let elementoApellido;
    let validacion = true;
    if (apellido.length >= 3) {
        for (let i = 0; i < apellido.length; i++) {
            elementoApellido = apellido.charAt(i);
            if (!esMayuscula(elementoApellido)) {
                validacion = false;
            }
        }
        if (validacion == false) {
            mostrarTexto(componente, "Ingresar solo letras Mayusculas");
        } else {
            mostrarTexto(componente, "");
        }

    } else {
        validacion = false;
        if (apellido == "") {
            mostrarTexto(componente, "CAMPO OBLIGATORIO");
        } else {
            mostrarTexto(componente, "Ingresar al menos 3 letras Mayusculas");
        }

    }
    return validacion;
}
esNombreValido = function (nombre, componente) {
    let elementoNombre;
    let validacion = true;
    if (nombre.length >= 3) {
        for (let i = 0; i < nombre.length; i++) {
            elementoNombre = nombre.charAt(i);
            if (!esMayuscula(elementoNombre)) {
                validacion = false;
            }
        }
        if (validacion == false) {
            mostrarTexto(componente, "Ingresar solo letras Mayusculas");
        } else {
            mostrarTexto(componente, "");
        }

    } else {
        validacion = false;
        if (nombre == "") {
            mostrarTexto(componente, "CAMPO OBLIGATORIO");
        } else {
            mostrarTexto(componente, "Ingresar al menos 3 letras Mayusculas");
        }

    }
    return validacion;
}
esCedulaValido = function (cedula) {
    let digito = 0;
    let valido = false;
    if (cedula.length == 10) {
        for (let i = 0; i < cedula.length; i++) {
            let caracter = cedula.charAt(i);
            if (esDigito(caracter)) {
                digito++;
            }
        }
        if (digito != 10) {
            mostrarTexto('lblErrorCedula', "Ingresar 10 digitos");
            valido = false;
        } else {
            mostrarTexto('lblErrorCedula', "");
            valido = true;
        }

    } else {
        if (cedula == "") {
            mostrarTexto('lblErrorCedula', "CAMPO OBLIGATORIO");
        } else {
            mostrarTexto('lblErrorCedula', "Ingresar 10 digitos");
        }
    }
    return valido;
}

mostrarOpcionEmpleado = function () {
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
}
mostrarOpcionResumen = function () {
    mostrarComponente('divResumen');
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
}
mostrarEmpleados = function () {
    let cmpTablaEmpleados = document.getElementById('tablaEmpleados');
    let elementoEmpleado;
    let contenidoTabla = "<table><tr>"
        + "<th>CEDULA</th>"
        + "<th>NOMBRE</th>"
        + "<th>APELLIDO</th>"
        + "<th>SUELDO</th>"
        + "</tr>"
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTablaEmpleados.innerHTML = contenidoTabla;
}