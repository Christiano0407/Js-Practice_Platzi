console.log("Figure"); 
// Figuras Geométricas
// Parámetro / área / Radio / Diámetro.
       // Cuadrado:
console.group("cuadrados"); 

const ladoCuadrado = 5; 
console.log(ladoCuadrado);

 perimetroCuadrado = () => { return ladoCuadrado * 4; } 
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
 console.group("Forms"); 
/* const labelCua = document.getElementById("inCuadrado");  */
const buttonP = document.getElementById("buttonP"); 
const buttonA = document.getElementById("buttonA"); 

console.log(buttonP); 

// Obtenemos el Parámetro:

// Función Parámetro:
lados = (number) => { return number * 4}; 
lados(); 
// Evento para obtener el parámetro:
buttonP.addEventListener("click", () => {
    console.log("Calcular el Perímetro"); 
    const labelCua = document.getElementById("inCuadrado"); 
    const value = labelCua.value; 

    const perimetro = lados(value);
    console.log(perimetro); 
}); 

// Obtenemos el Área:
console.log(buttonA); 
// Función para llamar el área: 
areaLados = (num) => {
    return num * num / 2; 
}; 
areaLados(); 
// Evento para llamar el área: 
buttonA.addEventListener("click", () => {
    console.log("Valor de Área"); 
    const labelCua = document.getElementById("inCuadrado");
    const value = labelCua.value; 
    
    const areas = areaLados(value); 
    console.log(areas)
}); 

 console.groupEnd(); 

 // ============ Triángulo =============
/* const labelTri = document.getElementById(`inTriangulo`); */ 
/* console.log(labelTri);  */
const btnTriangulo = document.getElementById(`btnPar`); 

parametroTri = (valA) => { ;
    return valA; 
}; 

btnTriangulo.addEventListener(`click`, () => {
    const labelTri = document.getElementById(`inTriangulo`); 
    console.log("Obtener Triángulo"); 
    const val = labelTri.value; 

    const paramTri = parametroTri(val); 
    console.log(paramTri);

}); 


 // =================Círculo ============
const labelCir = document.getElementById(`inCirculo`); 
console.log(labelCir); 