//Cree una función que tome una cadena como entrada y devuelva la versión invertida de la cadena

const cadenaInvertida = (cadena) => {
    let arrCadena = [cadena];
    const resultado = []
    for(let i = arrCadena.length - 1; i>=0; i--){
        resultado.push(arrCadena[i])
    }
    return resultado;
}
