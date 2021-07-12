console.log("Progress"); 

console.group("Scroll Progress"); 
// Varisbles =========== > 
let progressSection = document.querySelector(`.progress-section`); 
let progressBar = document.querySelector(`.progress-bar-wrap`); 
let progressNum = document.querySelector(`.progress-num`); 
let x, y; 
// ========= Functions / Porcentaje / Scroll ============ > 
updateProgressBar = () => {
 /*   console.log(getScrollPercentage());  */
   progressBar.style.height = `${getScrollPercentage()}%`; 
   requestAnimationFrame(updateProgressBar); 
}

getScrollPercentage = () => {
    return((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);

}


updateProgressBar(); 
console.groupEnd(); 