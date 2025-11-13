//escribir una funcion que compare dos arreglos y 
// regrese true si son iguales, false si son diferentes

function compararArr(arr1, arr2) {

    if(arr1.length !== arr2.lenth){
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i]!==arr2[i]) {
            return false;
            
        }
        
    }return true;
    
}