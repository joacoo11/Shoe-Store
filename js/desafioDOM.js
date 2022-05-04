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
