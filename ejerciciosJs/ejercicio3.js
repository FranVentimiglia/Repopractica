/*Definir una función que cree una cadena de letras repetidas tantas veces
como le digamos. 
 
La función recibe dos argumentos: la letra y el número de repeticiones.*/

function repetirLetras(letra, repeticiones) {
    let cadena;

    for (let i = 0; i < repeticiones; i++) {
        cadena = + letra;
    } return cadena

}

let letra;
let repeticiones;

letra = prompt("Ingresa una letra");
repeticiones = prompt("Ingresa la cantidad de repeticiones");

Console.log("Su cadena es:" + repetirLetras(letra,repeticiones));


//Error corregido de hotfix

//Correccion aprobada en desarrollo