console.log("Two taller"); 
// ================ PRECIO / DESCUENTOS / Porcentajes / Ventas =================

// Primer paso: Definir fórmula
     // Precio * (100 - %) / 100    // => % = Descuento.

// Segundo: Implementar la fórmula en javascript.
// Tercer: Crear las funciones.
// Integrar HTML a Javascipt.

// ====== 1) Nuestras Variables: ========
console.group("Variables"); 
//const precioOriginal = 150;  

//const descuento = 20; 
// Descuento en porcentaje = 15%

//const porcentajePrecioConDescuento = 100 - descuento;
//console.log(procentajePrecioConDescuento); 
//const precioFijo = (precioOriginal * porcentajePrecioConDescuento) / 100; 
//console.log(`El precio total a pagar: ${precioFijo} pesos`);

/* console.log({ */
/*      precioOriginal,  */
/*      descuento, */
/*      porcentajePrecioConDescuento,  */
/*      precioFijo, */
/* });  */


console.groupEnd(); 

// ======= Lo vamos a cambiar a una función =======
console.group("Funciones");

calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  let precioFijo = (precio * porcentajePrecioConDescuento) / 100; 

  return precioFijo; 
}; 

console.log(calcularPrecioConDescuento(500, 20)); 


console.groupEnd(); 

// ======== Formulario para descuentos ========

//const inputPrecio = document.getElementById(`inputPrice`); 

//const inputDescuento = document.getElementById(`inputDiscount`); 

const btn = document.getElementById(`btn`); 
//const cash = document.getElementById(`cash`); 

console.group("price and Discount"); 

btn.addEventListener(`click`, () => {
  console.log("btn"); 
  const inputPrice = document.getElementById(`inputPrice`); 
  const priceValue = inputPrice.value; 
  
  const inputDiscount = document.getElementById(`inputDiscount`); 
  const discountValue = inputDiscount.value; 

  const precioTotal = calcularPrecioConDescuento(priceValue, discountValue);
  
  const cash = document.getElementById(`cash`); 
  cash.innerText =` El precio total a pagar es: $ ${precioTotal} Dólares`;  
}); 

console.log(cash);
console.groupEnd(); 