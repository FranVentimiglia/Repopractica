// Dado un arreglo de números, hacer una funcion que encuentre los números más altos y más bajos de la matriz.

function encontrarMayorYMenor(array) {

    let mayor = array[0];
    let menor = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]

        } if (array[i] < menor) {
            menor = array[i]
        }

    }

    const arreglo = [3, 7, 2, 9, 4, 1];
    const resultado = encontrarMayorYMenor(arreglo);
    console.log("El número mayor es y menor es" + resultado );

}