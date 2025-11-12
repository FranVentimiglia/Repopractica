// Verifica si el elemento existe dentro del arreglo recibido.
// Retornar true si está, o false si no está.

let array = [4,3,5,6,7,8,2,9]
let elementoAEncontrar = 8;

function encontrarElemento( ) {
   for (let i = 0; i < array.length; i++) {
    if(array[i] === elementoAEncontrar){
        return true;
    }
    return false; 
   } 
}