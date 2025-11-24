/*  
Crear una función llamada estacionamiento().  
La función debe recibir como parámetro la cantidad de horas que un vehículo permanece estacionado.  

Si la persona estaciona 1 hora, el valor será de $500.  
Si permanece entre 2 y 5 horas, el valor será de $400 por hora.  
Si permanece más de 5 horas, el valor será de $350 por hora.  

La función deberá retornar el total a pagar por el estacionamiento.
*/

function estacionamiento(hora) {

    let total = 0;

    if (hora === 1) {
        total = 500;
    } else if (hora >= 2 && hora < 5) {
        total = hora * 400;
    } else if (hora > 5) {
        total = hora * 350
    }

    return total;
}