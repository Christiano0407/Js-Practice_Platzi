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
    
    //Precio Total ===> 
    const precioTotal = calcularPrecioConDescuento(priceValue, discountValue); 
    //console.log(`El precio Total es: ${precioTotal}`); 
    const money = document.getElementById(`money`);
    money.innerText = `El monto total a pagar:$ ${precioTotal} dólares`; 

}); 

console.groupEnd(); 

// =========== Implementar Descuento con cupones ==============> 
// === aRRAY DE CUPONES ======>

const coupons = [
    "juan_es_Batman", 
    "no_le_digas_nadie", 
    "es_secreto",
]; 
console.group("Cupones")
/* const inputCoupon = document.getElementById(`inputCoupons`);  */
// Textos adicionales cuando pagas ====> 
//const money = document.getElementById(`money`);
//const CouponsMoney = document.getElementById(`couponsMoney`); 

// ========== Nuevo evento del botón con descuento ========= > 
const btnDiscount = document.getElementById(`btnDiscount`); 

precioConDescuento = (precio, descuento) => {

    const porcentajePrecioConDescuento = 100 - descuento; 

    let precioPago = (precio * porcentajePrecioConDescuento) / 1
    return precioPago; 
}
console.log(precioConDescuento(100, 15)); 

btnDiscount.addEventListener(`click`, () => {
    console.log("btnCoupons"); 

    const inputPrice = document.getElementById(`inputPrice`); 
    const priceValue = inputPrice.value; 
    
    const inputDiscount = document.getElementById(`inputDiscount`);
    const discountValue = inputDiscount.value;
    // Coupons Discount ===> 
    const inputCoupon = document.getElementById(`inputCoupons`); 
    const discountCoupons = inputCoupon.value; 
    // Nueva variable = Descuento ==> 

    let discount; 
    // error First ===> 
    if(!coupons.includes(discountCoupons)) {
    console.log("El cupón " + discountCoupons +  " No es válido" ); 
     
   }else if(discountCoupons ===  "juan_es_Batman") {
       discount = 15; 
   }else if(discountCoupons ===  "no_le_digas_nadie") {
       discount = 30; 
   }else if(discountCoupons === "es_secreto") {
       discount = 25; 
   }
    // Arrays=> 
    //Precio Total ===> 
    const precioBoletoConDescuento = precioConDescuento(priceValue, discount); 
    //console.log(`El precio Total es: ${precioTotal}`); 
    const couponsMoney = document.getElementById(`couponsMoney`); 
    couponsMoney.innerText = `El monto total a pagar con cupones es:$ ${precioBoletoConDescuento} dólares`; 
    
    console.log(couponsMoney); 
}); 

/* console.log(CouponsMoney);  */
console.groupEnd(); 

