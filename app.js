let primerContent = document.querySelector("#main");
let segundoContent = document.querySelector("#maintwo");
let btnEnviar = document.querySelector("#btn_enviar");
let numberContainer = document.querySelector(".number__container");
let numeroCambio = document.querySelector("#numeroCambio")



btnEnviar.addEventListener("click", cambiarweb);

function cambiarweb(){
    segundoContent.style.display = "block"
    primerContent.style.display = "none"

}



let btnNumber = document.querySelectorAll(".btn__number");
btnNumber.forEach(numer =>{
    numer.addEventListener("click", ()=>{

        numeroCambio.innerHTML = numer.innerHTML
        numer.style.backgroundColor = "hsl(25, 97%, 53%)"
        numer.style.color = "white"
    })
})