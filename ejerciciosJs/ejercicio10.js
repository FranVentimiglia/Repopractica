//Escribe una función que reciba como argumento un precio y el porcentaje de impuestos.
//  La función devolverá el valor total a pagar, teniendo en cuenta que al precio sin impuestos
//  se le descuenta un porcentaje del 10% si es mayor de 100 pesos.

let precio = parseInt(prompt("Ingrese el precio"));
let impuesto = parseInt(prompt("Ingrese el porcentaje de impuesto%"));

function totalAPagar(precio, impuesto) {

    let gasto = precio;
    let descuento = precio * 0.10;

    if (precio > 100) {

        gasto = precio - descuento;

    }

    gasto = precio + (precio * (impuesto / 100));

    return gasto;
}

let precioFinal = totalAPagar(precio, impuesto);

console.log("El precio final es: $" + precioFinal);