calcularDescuento = function(monto, porcentajeDescuento){
    let valorDescuento= (monto*porcentajeDescuento)/100;

    return valorDescuento;
}
calcularIVA = function(monto){
    let valorIVA= (monto*12)/100;
    return valorIVA;
}
calcularSubtotal = function(precio, cantidad){
let valorAPagar=precio*cantidad;
return valorAPagar;
}

calcularTotal = function(subtotal, desccuento, iva){
    let valorAPagar= calcularSubtotal()-calcularValorDescuento()+calcularIVA();
    return valorAPagar;

}

