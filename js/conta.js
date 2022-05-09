// Cambio el h1
let h1 = document.querySelector("#h1__sh")
console.log(h1.innerText)
h1.innerText = "Reach out to us!"

// Creacion slideshow
const slideShow = document.querySelector("#slideShow")
console.log(slideShow)

const carrusel = ["ky3", "lebro", "kyrie 6", "grinch", "4"];
for(let i=0; i<carrusel.length; i+=1){
    let image = new Image();
    image.src = "../Shoes/"+ carrusel[i] + ".png"
    slideShow.appendChild(image)
}

slideShow.childNodes[0].setAttribute("class", "current")

let x=0;

setInterval(function(){
    slideShow.childNodes[x% carrusel.length].setAttribute("class", "")
    slideShow.childNodes[(x + 1) % carrusel.length].setAttribute("class", "current")

    x+=1;

}, 4000)



// Desafio Eventos
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const input4 = document.querySelector("#input4")
const input5 = document.querySelector("#input5")
const input6 = document.querySelector("#input6")
console.log(input1)
console.log(input2)
console.log(input3)
console.log(input4)
console.log(input5)
console.log(input6)

input1.addEventListener('input', () => {
     console.log(input1.value)
})
input2.addEventListener('input', () => {
     console.log(input2.value)
})
input3.addEventListener('input', () => {
    console.log(input3.value)
})
input4.addEventListener('input', () => {
     console.log(input4.value)
})
input5.addEventListener('input', () => {
    console.log(input5.value)
})
input6.addEventListener('input', () => {
     console.log(input6.value)
})

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target
    console.log(formulario.children[0].value);
    console.log("Formulario Enviado");   
}

