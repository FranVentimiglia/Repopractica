/*Crear una funcion que pida una nota y la convierta a calificaciones literales:

Menos de 5 es desaprobado , 6 y 7 son bien, 8 y 9 es sobresaliente y 10 es excelente.*/

function pasajeDeNota(nota) {
    if (nota <= 5) {
        return desaprobado;
    } else if (nota <= 7) {
        return aprobado;
    } else if (nota <= 9) {
        return sobresaliente;
    } else if (nota === 10) {
        return excelente;
    }

}

const notaIngresada = parseInt(Prompt("Ingrese su nota"));

console.log("Su calificacion es: " + pasajeDeNota(notaIngresada));