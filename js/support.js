/*creation de l'info texte*/
let container = document.getElementById('container');
let btnInfo = document.createElement('p');
btnInfo.textContent = "Cliquez pour copier" ;
container.appendChild(btnInfo);
btnInfo.className = "copy-info";
/*detection du click*/
let btnCopy = document.getElementById("copy");
const textCopy = "houmous.entertaiment@gmail.com"
btnCopy.addEventListener("click", () =>{
  navigator.clipboard.writeText(textCopy)
  btnInfo.textContent = "Copié !";
  btnInfo.style.color = "#57F287";
})
/*changement au click + reset*/
let canReset = false;
container.addEventListener("mouseleave", ()=>{
  canReset = true;
});
btnInfo.addEventListener("transitionend", () => {
  if (canReset == false){
    return
  }
  btnInfo.textContent = "Cliquez pour copier";
  btnInfo.style.color = "gray";
  canReset = false;
});

