nombre()
viveCaba()
email()
METODOPAGO()


function nombre (){
    let name = prompt("Cual es tu nombre?")
    document.write("Hola " + name + "!")
    console.log(name)
}

function viveCaba(){
    let vivienda = prompt("Vivis en Buenos Aires?")
    if(vivienda == "no"){
        alert("No hacemos envios fuera de C.A.B.A.")
        console.log("No vive en C.A.B.A.")
    }else{
        let barrio = prompt("En que barrio residis?")
        console.log(barrio)
    }
}

function email(){
    let gmail = prompt("Por favor, ingrese su gmail.")
    if(gmail != ""){
        console.log(gmail)
        alert("Muchisimas gracias!")
    }else if(gmail === ""){
        alert("No puede continuar sin ingresar su gmail.")
        email()
    }
}

function phone(){
    let number = prompt("Por favor, ingrese su numero de telefono.")
    if(number != ""){
        console.log(number)
        alert("Muchisimas gracias!")
    }else if(number === ""){
        alert("No puede continuar sin ingresar su telefono.")
        phone()
    }
}

function METODOPAGO(){
    let METODOPAGO = prompt("Cual es tu metodo de pago ideal? (Efectivo, transferencia, mercado pago u otro)")
    switch(METODOPAGO){
        case"efectivo":
            console.log("Pago con efectivo")
            break;            
        case"transferencia":
            console.log("Pago con transerencia")
            break;
        case"mercado pago":
            console.log("Pago con Mercado Pago")
            break;  
        default:
            console.log("Pago con otro metodo")
            break;
    }
}

function consulta(){
    let doubt = prompt("Dejanos tu mensaje y/o consulta!")
    if(doubt != ""){
        console.log(doubt)
        alert("Tu mensaje sera respondido lo antes posible!")
    } else if(doubt === ""){
        alert("No has ingresado nada! :(")
        consulta()
    }
}