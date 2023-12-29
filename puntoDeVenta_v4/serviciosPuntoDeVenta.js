calcularValorDescuento = function(monto, porcentajeDescuento){
    let valorDescuento= (monto*porcentajeDescuento)/100;
    let valorTotal= monto-valorDescuento;
    return valorTotal;
}
calcularIVA = function(monto){
    let valorIVA= (monto*12)/100;
    let valorConIVA= monto+valorIVA;
    return valorConIVA;
}
calcularSubtotal = function(precio, cantidad){
let valorAPagar=precio*cantidad;
return valorAPagar;
}

calcularTotal = function(subtotal, desccuento, iva){
    let valorAPagar= calcularSubtotal()-calcularValorDescuento()+calcularIVA();
    return valorAPagar;

}

