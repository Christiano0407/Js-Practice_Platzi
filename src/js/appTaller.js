console.log("Two taller"); 
// ================ PRECIO / DESCUENTOS / Porcentajes / Ventas =================

// Primer paso: Definir fórmula
     // Precio * (100 - %) / 100    // => % = Descuento.

// Segundo: Implementar la fórmula en javascript.
// Tercer: Crear las funciones.
// Integrar HTML a Javascipt.

// ====== 1) Nuestras Variables: ========
console.group("Variables"); 
const precioOriginal = 150; 

const descuento = 20; 
// Descuento en porcentaje = 15%

const porcentajePrecioConDescuento = 100 - descuento;
//console.log(procentajePrecioConDescuento); 
const precioFijo = (precioOriginal * porcentajePrecioConDescuento) / 100; 
//console.log(`El precio total a pagar: ${precioFijo} pesos`);

console.log({
     precioOriginal, 
     descuento,
     porcentajePrecioConDescuento, 
     precioFijo,
}); 


console.groupEnd(); 

// ======= Lo vamos a cambiar a una función =======
