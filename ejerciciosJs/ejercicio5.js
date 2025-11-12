/*Escribe una función que determina si la letra que se le pasa como argumento se encuentra
 contenida dentro de un array de letras que se le pasa como segundo argumento.*/

function contieneLetra(letra, array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === letra) {
            return true;
        }
    } return false

}

const array = ["a","i","d","j","r"];
