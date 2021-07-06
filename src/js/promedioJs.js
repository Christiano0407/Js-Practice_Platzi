console.log("Promedio!"); 
// ========= Taller 3: promedio, mediana y moda ===========>

       /*     e ===== STADÍSTICA  ========*/
//- Primer paso: definir las fórmulas
//- Segundo paso: implementar la fórmulas en JavaScript 
//- Tercer paso: crear funciones
//- Cuarto paso: integrar JS con HTML
//# curso-practico-javascript

// Promedio ==========> 
// Fórmula: Media aritmética:
/* Ventana1 + ventana2 + ventana3 / cantidad de ventanas */

// MEDIANA ======> 
// Elemento que esté exactamente en medio de la lista.

// MODA ========> 
// Elemento que más se repite de una lista

// ============== Exercise Promedio =============>
console.group("Lista / Promedio"); 

/* const listOne =  */
/* [ */
/*     100,200,300,500,400   */
/* ];  */
// Ciclo ===> 
/* let sumListOne = 0;  */
/* for(let i = 0; i < listOne.length; i++)  */
/* { */
/*  sumListOne = sumListOne + listOne[i];  */
/* } */
// Promedio ==> 
/* const promedioLista = sumListOne / listOne.length;  */

// Function para calcular la media =======> 
calcularMediaAritmetica = (list) => {
//promedio => 
   /*  let sumList = 0;  */
   /*  for(let i = 0; i < list.length; i++)  */
   /*  { */
   /*   sumList = sumList + list[i];  */
   /*  } */

// Method reduce ==> Funciona igual al ciclo for ======> 
// Valor Acumulado + nuevo elemento.
  const sumList = list.reduce((accumulator = 0, currentValue) => {
  
      return accumulator + currentValue; 
  }); 

    const promedioList = sumList / list.length; 

    return promedioList; 
}

console.log(calcularMediaAritmetica([10,20,20,50,50]) ); 
// 100 / 4 = 25 ==> result.
// 150 / 5 = 30 ==> result.

// Método forEach ==>  
let array1 = [10,20,30,40,50,60,70,80,90]; 

array1.forEach((item, index) => {
   console.log(item, index); 
}); 

// Promedio ======>
//console.log(sumListOne); 
//console.log(promedioLista); 
//console.log(listOne); 
console.groupEnd(); 