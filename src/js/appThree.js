console.log("Practice Two / Taller Dos"); 
// ===========Variables ===========>
/* const inputPrice = document.getElementById(`inputPrice`);  */

/* const inputDiscount = document.getElementById(`inputDiscount`);  */

/* const money = document.getElementById(`money`);  */

const button = document.getElementById(`btn`); 

// ==================Funciones / Eventos ===========>
console.group("Practica Dos"); 

console.log(money); 
// Funcción para llamar Precio con Descuento ====>
calcularPrecioConDescuento = (precio, descuento) => {

    const porcentajePrecioConDescuento = 100 - descuento; 

    let precioPago = (precio * porcentajePrecioConDescuento) / 100; 
    return precioPago; 
}
console.log(calcularPrecioConDescuento(100, 15)); 

// Evento  =========>
button.addEventListener(`click`, () => {
    console.log("Click Btn"); 

    const inputPrice = document.getElementById(`inputPrice`); 
    const priceValue = inputPrice.value; 

    const inputDiscount = document.getElementById(`inputDiscount`);
    const discountValue = inputDiscount.value;
    
    const precioTotal = calcularPrecioConDescuento(priceValue, discountValue); 
    //console.log(`El precio Total es: ${precioTotal}`); 
    const money = document.getElementById(`money`);
    money.innerText = `El monto total a pagar:$ ${precioTotal} dólares`; 

}); 

console.groupEnd(); 

// Implementar Descuento con cupones ==============> 
 
