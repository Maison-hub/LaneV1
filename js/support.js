/*creation de l'info texte*/
let container = document.getElementById('container');
let btnInfo = document.createElement('p');
btnInfo.textContent = "Cliquez pour copier" ;
container.appendChild(btnInfo);
btnInfo.className = "copy-info";
/*detection du click*/
let btnCopy = document.getElementById("copy");
const textCopy = "Houmous.Entertaiment@gmail.com"
btnCopy.addEventListener("click", () =>{
  navigator.clipboard.writeText(textCopy)
  btnInfo.textContent = "Copié !";
  btnInfo.style.color = "#43B581";
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

