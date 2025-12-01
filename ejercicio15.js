/* 
Crear una función llamada calcularEnvio().
La función debe recibir como parámetros el peso del paquete (en kg) y la distancia (en km).

Si el paquete pesa hasta 5 kg, el costo del envío es de $500.
Si pesa más de 5 kg, el costo es de $800.

Además, si la distancia supera los 100 km, al costo total se le debe sumar un 15% extra.

La función debe retornar el costo total del envío.
*/


function calcularEnvio(peso, distancia) {
    let costoTotal;

    if (peso <= 5) {
        costo = 500;
    } else {
        costo = 800;
    }

    if (distancia > 100) {
        costo = costo * 1.15;

    }

    return costo;

}
let peso = parseInt(prompt("Ingrese el peso del paquete en kilos"));
let distancia = parseInt(prompt("Ingrese la distancia en kilometros"));

let total = calcularEnvio(peso, distancia);

console.log("El valor total es de: " + total);