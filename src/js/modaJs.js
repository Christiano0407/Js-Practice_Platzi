console.log("modaJs"); 
console.group("Lista")
// List / Invocar a la funciones ============= >  
const list1 = [1,2,3,2,3,1,1,3,2,1,3,2,1,3,2,2,3,1,1,1,2,4,2,2]; 
// 1) Array a objeto ==== >
const list1Count = {}; 

list1.map( function (element) {
   if(list1Count[element]) {
       list1Count[element] += 1; 
   }else {
       list1Count[element] = 1; 
   }
}); 

// 2) Ahora, convertir el objeto otra vez a un array ====== >
// const list1Array = Object.entries(list1Count); 
// ===== sort() == para iterar y buscar === >
const list1Array = Object.entries(list1Count).sort(
    function(acumulatorValue, newValue) {
     /*  if(acumulatorValue > newValue) return 1;  */
     /*  if(acumulatorValue ===  newValue) return 0;  */
     /*  if(acumulatorValue < newValue) return -1;  */
      return acumulatorValue[1] - newValue[1]; 
    }
); 
// ===== Moda ======= > 
const moda = list1Array[list1Array.length - 1]; 

// Llamar a la funciones ==== >  
console.log(list1); 
console.log(list1Count); 
console.log(list1Array); 
console.log(moda); 

console.groupEnd(); 