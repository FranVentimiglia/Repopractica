/*Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, 
el primero será el supuesto mutiplo del segundo argumento.*/

function esMultiplo(multiplo, divisor) {
    if (multiplo % divisor == 0) {
        return true;
    } else {
        return false;
    }
}