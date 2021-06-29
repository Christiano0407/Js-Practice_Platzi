console.log("Figure"); 
// Figuras Geométricas
// Parámetro / área / Radio / Diámetro.
       // Cuadrado:
console.group("cuadrados"); 

const ladoCuadrado = 5; 
console.log(ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4; 
console.log(perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado / 2; 
console.log(`Es el área total: ${areaCuadrado}cm`);

console.groupEnd(); 

      // Triángulo:
const ladoA = 10; 
const ladoB = 5; 
const ladoC =+ ladoB; 

console.group("Triáangulo")
console.log(`${ladoA}, ${ladoB}, ${ladoC}`); 

param = () => {
    let paramTria = ladoA + ladoB + ladoC; 
    console.log(`Es el parámetro: ${paramTria}`); 
}

area = () => {
    let areaTotal = ladoA * ladoB / 2; 
    console.log(`El área total es: ${areaTotal}`); 
}

param(); 
area(); 
console.groupEnd(); 

          // Círculo:
