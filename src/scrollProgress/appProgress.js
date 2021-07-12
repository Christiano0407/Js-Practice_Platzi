console.log("Progress"); 

console.group("Scroll Progress"); 
// Varisbles =========== > 
let progressSection = document.querySelector(`.progress-section`); 
let progressBar = document.querySelector(`.progress-bar-wrap`); 
let progressNum = document.querySelector(`.progress-num`); 
let x, y; 
// ========= Functions / Porcentaje / Scroll ============ > 

// Activar el mover scrollSection === > 
/* window.addEventListener(`mouseover`, (e) => { */
/*     x = e.clientX;  */
/*     y = e.clientY;  */
/* });  */

// Llamar scroll en altura y porcentaje > 
updateProgressBar = () => {
 /*   console.log(getScrollPercentage());  */

   //progressSection.style.transform = `translate(${x}px, ${y}px)`; 
   progressBar.style.height = `${getScrollPercentage()}%`; 
   progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`; 
   requestAnimationFrame(updateProgressBar); 

}; 

getScrollPercentage = () => {
    return((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);

}; 


updateProgressBar(); 
console.groupEnd(); 