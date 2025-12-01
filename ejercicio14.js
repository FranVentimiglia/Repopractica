 /*Crear una función llamada calcularSalario().
La función debe recibir como parámetros la cantidad de horas trabajadas en el mes y el valor por hora.

Si la persona trabaja hasta 160 horas, se paga el valor por hora normal.

Si trabaja más de 160 horas se pagan con un 20% extra.

La función deberá retornar el salario total correspondiente según las horas trabajadas.*/

function calcularSalario(horas,valorHora) {
    let salario=0;

    if(horas<=160){
        salario = horas * valorHora;
    }else if (horas<= 200) {
        let horasExtra = horas - 160;
        salario = (160 * valorHora) + (horasExtra * valorHora * 1.20);
    }

    return salario;
    
}

let horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas:"));
let valorHora = parseInt(prompt("Ingrese el valor por hora:"));