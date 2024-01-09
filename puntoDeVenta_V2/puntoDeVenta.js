calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");

    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");

    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");


    if (isProductoValide(nombreProducto, "lblError1") & isCantidadValide(cantidad, "lblError2") & isPrecioValide(precioProducto, "lblError3")) {
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);

        mostrarTexto("lblSubtotal", valorSubtotal);

        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);

        mostrarTexto("lblDescuento", valorDescuento);


        valorIVA = calcularIVA(valorSubtotal - valorDescuento);

        mostrarTexto("lblValorIVA", valorIVA);

        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);

        mostrarTexto("lblTotal", valorTotal);
    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
    }




}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");



}
/* SI TODO FUNCIONA, HACER UN PUSH */

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let porcentajeDescuento;
    let valorDescuento;
    if (cantidad < 3) {
        porcentajeDescuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        porcentajeDescuento = 3;
    } else if (cantidad >= 6 && cantidad <= 11) {
        porcentajeDescuento = 4;
    } else if (cantidad >= 12) {
        porcentajeDescuento = 5;
    }
    valorDescuento = (porcentajeDescuento * subtotal) / 100;

    return valorDescuento;
}

isProductoValide = function (campo, idComponente) {
    let campoValidado = true;
    if (campo == "") {
        mostrarTexto(idComponente, "CAMPO OBLIGATORIO");
        campoValidado = false;
    } else {
        if (campo.length <= 10) {
            mostrarTexto(idComponente, "");
        } else {
            mostrarTexto(idComponente, "El campo debe tener menos de 10 caracteres");
            campoValidado = false;
        }
    }
    if (campoValidado == true) {
        mostrarTexto(idComponente, "");
    }
    return campoValidado;
}

isCantidadValide = function (campo, idComponente) {
    let campoValidado = true;
    if (isNaN(campo)) {
        mostrarTexto(idComponente, "CAMPO OBLIGATORIO");
        campoValidado = false;
    } else {
        if (campo > 0 && campo <= 100) {
            mostrarTexto(idComponente, "");
            campoValidado = true;
        } else {
            mostrarTexto(idComponente, "El campo debe ser entre 0 y 100");
            campoValidado = false;
        }
    }
    if (campoValidado == true) {
        mostrarTexto(idComponente, "");
    }
    return campoValidado;
}

isPrecioValide = function (campo, idComponente) {
    let campoValidado = true;
    if (isNaN(campo)) {
        mostrarTexto(idComponente, "CAMPO OBLIGATORIO");
        campoValidado = false;
    } else {
        if (campo > 0 && campo <= 50) {
            mostrarTexto(idComponente, "");
            campoValidado = true;
        } else {
            mostrarTexto(idComponente, "El campo debe ser entre 0 y 50");
            campoValidado = false;
        }
    }
    if (campoValidado == true) {
        mostrarTexto(idComponente, "");
    }
    return campoValidado;

}