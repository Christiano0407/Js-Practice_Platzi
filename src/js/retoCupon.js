console.log("Reto Cupón"); 

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

const button = document.getElementById(`btn`); 
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

const verificationCoupon = function() 
{
    const coupons = [10, 25, 30]; 
    const coupon = document.getElementById(`coupons`); 
    const valueCoupon = parseInt(coupon.value); 

    if(valueCoupon === coupons[0])
    {
        return coupons[0]; 
    }else if (valueCoupon === coupons[1]) {
        return coupons[1]; 
    }else if (valueCoupon === coupons[2]) {
        return coupons[2]; 
    }else {
        return 0
    }
}; 

const btn = document.getElementById(`btnDiscount`); 

btn.addEventListener(`click`, () =>  {
    console.log("btn Discount"); 

    const inputPrice = document.getElementById(`inputPrice`); 
    const priceValue = inputPrice.value; 
    const inputDiscount = document.getElementById(`inputDiscount`);
    const discountValue = inputDiscount.value;

    const verificationCoupons = verificationCoupon(); 

    
})

console.groupEnd(); 