// nombre()
// viveCaba()
// email()
// METODOPAGO()


// function nombre (){
//     let name = prompt("Cual es tu nombre?")
//     document.write("Hola " + name + "!")
//     console.log(name)
// }

// function viveCaba(){
//     let vivienda = prompt("Vivis en Buenos Aires?")
//     if(vivienda == "no"){
//         alert("No hacemos envios fuera de C.A.B.A.")
//         console.log("No vive en C.A.B.A.")
//     }else{
//         let barrio = prompt("En que barrio residis?")
//         console.log(barrio)
//     }
// }

// function email(){
//     let gmail = prompt("Por favor, ingrese su gmail.")
//     if(gmail != ""){
//         console.log(gmail)
//         alert("Muchisimas gracias!")
//     }else if(gmail === ""){
//         alert("No puede continuar sin ingresar su gmail.")
//         email()
//     }
// }

// function phone(){
//     let number = prompt("Por favor, ingrese su numero de telefono.")
//     if(number != ""){
//         console.log(number)
//         alert("Muchisimas gracias!")
//     }else if(number === ""){
//         alert("No puede continuar sin ingresar su telefono.")
//         phone()
//     }
// }

// function METODOPAGO(){
//     let METODOPAGO = prompt("Cual es tu metodo de pago ideal? (Efectivo, transferencia, mercado pago u otro)")
//     switch(METODOPAGO){
//         case"efectivo":
//             console.log("Pago con efectivo")
//             break;            
//         case"transferencia":
//             console.log("Pago con transerencia")
//             break;
//         case"mercado pago":
//             console.log("Pago con Mercado Pago")
//             break;  
//         default:
//             console.log("Pago con otro metodo")
//             break;
//     }
// }

// function consulta(){
//     let doubt = prompt("Dejanos tu mensaje y/o consulta!")
//     if(doubt != ""){
//         console.log(doubt)
//         alert("Tu mensaje sera respondido lo antes posible!")
//     } else if(doubt === ""){
//         alert("No has ingresado nada! :(")
//         consulta()
//     }
// }

const stock = [
    {name:"Kyrie 4", price:32000 , img:"../Shoes/4.png"},
    {name:"Kyrie 3", price:36000 , img:"../Shoes/ky3.png"},
    {name:"LeBron 12" , price:41000 , img:"../Shoes/lebro.png"},
    {name:"Kyrie 3" , price:44000 , img:"../Shoes/ike-kyrie-3-basketball-shoe-nike-11563228103zb3wo3uuxc.png"},
    {name:"LeBron 11", price:28000, img:"../Shoes/lebron-11-graffiti-nike-lebron-11-mens-sports-shoes-png-favpng-AUzetSVHx8HN5C8sR35wbG1vx.jpg"},
    {name:"Jordan Superfly 5.0" , price:25000 , img:"../Shoes/air-jordan-basketball-shoe-nike-sneakers-basketball-shoe.png"},
    {name:"LeBron 14" , price:29000 , img:"../Shoes/imgbin-nike-lebron-14-sports-shoes-basketball-shoe-nike-lebron-je1ziyCAdSNdjyXNshKnTtbHr.jpg"},
    {name: "KD 9", price:42000 , img:"../Shoes/imgbin-golden-state-warriors-nike-basketball-shoe-kevin-durant-e491hRsEb02xETiKZVG6Bc556.jpg"},
    {name:"Kobe 5" , price:72000 , img:"../Shoes/grinch.png"},
    {name:"Kyrie 5" , price:63000 , img:"../Shoes/kyrie 5.jpg"},
    {name:"Kyrie 6" , price:65000 , img:"../Shoes/kyrie 6.png"},
]

stock.push({name:"Adidas NMD" , price:22000 , img:"../Shoes/Adidas_Nmd.png"})
console.log(stock)



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


const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const input4 = document.querySelector("#input4")
const input5 = document.querySelector("#input5")
const input6 = document.querySelector("#input6")
const form = document.querySelector("#formulario")
const errorNodes = document.querySelectorAll(".error")

let infoUser = [];

form.addEventListener('submit', (e) =>{
   e.preventDefault()  
   let inputValue = [];
   if(input1.value === "" || input1.value === null){
       inputValue.push('Please enter your first name.')
   }

   if(inputValue > 0){
    errorNodes.innerText = inputValue.join(', ') 
} 

let inputVal1 = JSON.stringify(localStorage.getItem("inputValues", input1))
})
