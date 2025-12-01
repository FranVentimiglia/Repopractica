//Crear un array edades con al menos 8 edades distintas.
//Recorrer el array y obtener el promedio de las edades del array. 

let edades = [44, 66, 80, 7, 15, 16, 36, 51];

let sumaDeEdades = 0;

for (i <= 0; i < edades.length; i++) {
    sumaDeEdades += edades[i];
}

let promedio = sumaDeEdades/edades.length;

console.log("El promedio de edad es: " + promedio);