console.log("Salario"); 
console.group("Sslarial / Salario"); 
// =============== Análisis: Total / promedio / Mediana =================== > 
// =============== Análisis: general / top 10% de personas =================== > 

// Creamos la Array en dónde estarán todas nuestras personas / salario ==== > 
const usa = []; 

// push = Agregar nuevos elementos a mi lista (usa) ==>>>
usa.push(
  {
   name: "Freddy",
   salary: 1000,
  }
); 
usa.push(
   {
    name: "Chris",
    salary: 1000,
   }
 ); 
 usa.push({
    name: "Natasha",
    salary: 1500,
 }); 
 usa.push({
    name: "Jennifer",
    salary: 500,
 }); 
 usa.push({
    name: "Luisa",
    salary: 100,
 }); 
 usa.push({
    name: "Scarlett",
    salary: 100,
 }); 
 usa.push({
    name: "Evans",
    salary: 1500,
 }); 
 usa.push({
    name: "Allan",
    salary: 200,
 }); 
 usa.push({
    name: "wILL",
    salary: 750,
 }); 
 usa.push({
    name: "David",
    salary: 2000,
 }); 

 // Lammar a las constantes =============== > 
console.log(usa); 
console.log(usa[0].name); 
console.log(usa[0].salary); 
console.log(usa[9]); 

console.groupEnd(""); 