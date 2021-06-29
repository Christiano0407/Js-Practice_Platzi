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
    let areaTotal = (ladoA * ladoB) / 2; 
    console.log(`El área total es: ${areaTotal}`); 
}

param(); 
area(); 
console.groupEnd(); 

          // Círculo:
// Radio y circunferencia.
console.group("Círculo"); 

const radioCir = 4; 
const diametroCir = radioCir * 2; 
const piRadio =  Math.PI; 

// Circunferencia (calc)
circunferencia = () => {
    let perCir = diametroCir * piRadio; 
    console.log(`El valor de la circunferencia es: ${perCir}`); 
}

// Área Círculo: 
// Pi * Diámetro al 2 (cuadrado).
areaCir = () => {
    let areaOne = (piRadio * diametroCir) * 2; 
    console.log(areaOne);
}

circunferencia();
areaCir(); 

console.groupEnd();

//======== Practice Function:
console.group("PractOne"); 
// Parámetro es como una variable = one.
const all = 10; 

practice = (one) => {
    return one + all; 
}

console.log(practice(5)); 

console.groupEnd(); 

 // ====== Interactuando desde HTML======
 