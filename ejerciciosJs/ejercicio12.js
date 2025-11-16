/*Crear una función que se llame facturacion() .
La función tiene que recibir como parámetro el monto de un producto ,y el medio de pago : C (tarjeta de crédito), 
E (efectivo) y D  (tarjeta de débito). Si el monto del producto es menor a $200 no se aplicará ningún descuento.
Si el monto a abonar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 
20% si se realiza con dÃ©bito y 10% con tarjeta de crédito. 
Para montos mayores a $400, el descuento es 40% sin importar el medio de pago.
La función deberá retornar el monto final a abonar.*/

function facturacion(monto, medioDePago) {
    let descuento = 0;

    if (monto < 200) {
        descuento = 0;
    } else if (monto >= 200 & monto <= 400) {
        if (medioDePago = "C") {
            descuento = 0.10
        } else if (medioDePago = "D") {
            descuento = 0.20
        } else if (medioDePago = "E") {
            descuento = 0.30
        }
    } else if (monto > 400) {
        descuento = 0.40
    }
    const montoFinal = monto - (monto * descuento);

    return montoFinal;
}

