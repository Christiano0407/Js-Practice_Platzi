console.log("Mediana"); 
// Calcular la media ============ > 
console.group("Media / calculator"); 
// ===== > Media >
calcularMediaAritmetica = (list) => {
    //promedio => 
        let sumList = 0; 
        for(let i = 0; i < list.length; i++) 
        {
         sumList = sumList + list[i]; 
        }
    
    // Method reduce ==> Funciona igual al ciclo for ======> 
    // Valor Acumulado + nuevo elemento.
     /*  const sumList = list.reduce((accumulator = 0, currentValue) = */
     /*   */
     /*      return accumulator + currentValue;  */
     /*  });  */
    
        const promedioList = sumList / list.length; 
    
        /* console.log(`El promedio es: ${promedioList}`);  */
        return promedioList; 
    }; 

// ==== List ===============> 
const listOne = [10,20,50,50,70]; 

const middleList = parseInt(listOne.length / 2); 
//console.log(middleList); 
// Lista par o impar ==> 
 
esPar = (numerito) => {
   if(numerito % 2 === 0) {
       return true; 
   }else {
       return false; 
   }
}; 

let mediana; 

if(esPar(listOne.length)) {
   
    const element1 = listOne[middleList -1]; 
    const element2 = listOne[middleList]; 

    const calculatorElements = calcularMediaAritmetica([
          element1 + element2
    ]); 

    mediana = calculatorElements; 

}else {
    mediana = listOne[middleList]; 
}

console.log(listOne); 
console.log(middleList); 
console.log(mediana); 
console.log(esPar(mediana)); 
console.groupEnd(); 

//==== Método sort() =============  unicode ===== > 
const fruits = ["Banana", "Apple", "Melon"]; 
console.log(fruits.sort() ); 
let decimals = [10, 30, 20, 100, 80, 60]; 
console.log(decimals.sort()); 
let ball = ["basquet", 10, "baseball", 50, 30, 20, "apple"]; 
console.log(ball.sort()); 