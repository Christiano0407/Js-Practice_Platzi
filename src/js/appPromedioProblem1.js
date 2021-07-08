console.log("Problem Promedio"); 

console.group("Problema2 / promedio Ponderado"); 
//  =============== Ejemplo: Promedio Ponderado ================== > 

// == Un caso de uso de la media ponderada es el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes “créditos”.
// 1) Definir el conjunto de números junto al peso de cada elemento ==== Variables  ====== > 
const notes = [
    {
       courses: "Math",
       note: 10,
       credit: 2,
    }, 
    {
      courses: "English",
      note: 8,
      credit: 5,
    },
    {
      courses: "Finances",
      note: 7,
      credit: 5,
    },
]; 
console.log(notes); 

// 1)  Multiplicar cada número de la lista por su peso ====== >
const notesWithCredit = notes.map(function(noteObject) {
    return noteObject.note * noteObject.credit; 
}); 
console.log(notesWithCredit); 
// 2) Suma de Notas ============= >
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function(sum = 0, newValue) {
        return sum + newValue; 
    }
); 
console.log(sumOfNotesWithCredit)

// 3) Sumar todos los pesos(creditos) ===================== > 
const Credits = notes.map(function(noteObject) {
    return noteObject.credit; 
}); 
console.log(Credits); 
// 1-ValorTotal / 2- Nuevo Valor = Reduce > 
const sumOfCredits = Credits.reduce(
   function(sum = 0, newValue) {
       return sum + newValue; 
   }
); 
console.log(sumOfCredits); 
// 4) Hacer La división entra ambas "suma" =============== > 
// Lo último que nos falta es dividir nuestra variable NotesWithCredit sobre la variable sumOfCredits.
const promedioPonderadoConCredito =  sumOfNotesWithCredit / sumOfCredits; 
console.log(promedioPonderadoConCredito); 

// La media aritmética sin tener en cuenta el peso de cada nota habría sido 8.333.
console.groupEnd(); 