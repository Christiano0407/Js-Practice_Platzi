// An'alisis =========== > 
console.group("Análisis"); 
// Creamos todo el análisis de salario >>>>>>>>

// LLamar a los puros salarios =========== >
const salaryUsa = usa.map(
    (person) => {
     return person.salary; 
    }
)
// Llamar al salario ordenadamente ======= > 
const salaryUsaSorted = salaryUsa.sort(
    (salaryA, salaryB) => {
      return salaryA - salaryB; 
    }
); 
// Calcular la mediana ============= > 
// >> Saber si el numero es par ===== >>
esPar = (person) => {

   /* if(person % 2 === 0 ) { */
   /*     return true;  */
   /* }else { */
   /*     return false;  */
   /* } */
   return (person % 2 === 0); 
};
// Calcular la mediana / Function ======>>>>>>
calcularMediaAritmetica = (list) => {
  const sumList = list.reduce (
      (valorAcumulado = 0, nuevoValor) => {
          return valorAcumulado + nuevoValor; 
      }
  )
  // >>> lLAMAR AL PROMEDIO >>>>
  const promedioLista = sumList / list.length; 
  return promedioLista; 
}; 


// Promedio ==> Ayudar a calcularlo para la mediana. 
medianaSalary = (list) => {

    const middle = parseInt(list.length / 2); 

    if(esPar(list.length)) 
    {
        const middlePerson1 = list[middle -1]; 
        const middlePerson2 = list[middle]; 

        const mediana = calcularMediaAritmetica([middlePerson1, middlePerson2]); 
        return mediana; 

    }else {
        // sea impar => 
        const middlePerson = list[middle]; 
        return middlePerson
    }
}; 


// ====== Llamar a las variables =========== >>>>>>
//console.log(salaryUsa); 
//console.log(salaryUsaSorted);
console.log({
    salaryUsa,
    salaryUsaSorted,
});  
console.log(medianaSalary(salaryUsaSorted)); 
console.groupEnd(); 