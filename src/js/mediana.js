console.log("Mediana"); 
// Calcular la media ============ > 
console.group("Media / calculator"); 
// ===== > Media >

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [
    100,
    200,
    500,
    400000000,
  ];
  
  const mitadLista1 = parseInt(lista1.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }

  
console.groupEnd(); 

//==== Método sort() =============  unicode ===== > 
const fruits = ["Banana", "Apple", "Melon"]; 
console.log(fruits.sort() ); 
let decimals = [10, 30, 20, 100, 80, 60]; 
console.log(decimals.sort()); 
let ball = ["basquet", 10, "baseball", 50, 30, 20, "apple"]; 
console.log(ball.sort()); 