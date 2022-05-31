let carts = document.querySelectorAll('.add-cart')

let products = [
    {name:"Kyrie 4", price:32000 , img:"../Shoes/4.png", inCart: 0},
    {name:"Kyrie 3", price:36000 , img:"../Shoes/ky3.png", inCart: 0},
    {name:"LeBron 12" , price:41000 , img:"../Shoes/lebro.png", inCart: 0},
    {name:"Kyrie 3" , price:44000 , img:"../Shoes/ike-kyrie-3-basketball-shoe-nike-11563228103zb3wo3uuxc.png", inCart: 0},
    {name:"LeBron 11", price:28000, img:"../Shoes/lebron-11-graffiti-nike-lebron-11-mens-sports-shoes-png-favpng-AUzetSVHx8HN5C8sR35wbG1vx.jpg", inCart: 0},
    {name:"Jordan Superfly 5.0" , price:25000 , img:"../Shoes/air-jordan-basketball-shoe-nike-sneakers-basketball-shoe.png", inCart: 0},
    {name:"LeBron 14" , price:29000 , img:"../Shoes/imgbin-nike-lebron-14-sports-shoes-basketball-shoe-nike-lebron-je1ziyCAdSNdjyXNshKnTtbHr.jpg", inCart: 0},
    {name: "KD 9", price:42000 , img:"../Shoes/imgbin-golden-state-warriors-nike-basketball-shoe-kevin-durant-e491hRsEb02xETiKZVG6Bc556.jpg", inCart: 0},
    {name:"Kobe 5" , price:72000 , img:"../Shoes/grinch.png", inCart: 0},
    {name:"Kyrie 5" , price:63000 , img:"../Shoes/kyrie 5.jpg", inCart: 0},
    {name:"Kyrie 6" , price:65000 , img:"../Shoes/kyrie 6.png", inCart: 0},
]


for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', ()=>{
        cartNumber(products[i]);
        totalPrice(products[i]);
    })
}

function cartNumber(product){

    let productNumber = localStorage.getItem('cartNumber');

    productNumber = parseInt(productNumber);

    if( productNumber ){
        localStorage.setItem('cartNumber', productNumber + 1)
    }else{
        localStorage.setItem('cartNumber', 1)
    }

    setItem(product)
}

function setItem(product){
    let cartItem = localStorage.getItem("productsInCart");
    cartItem = JSON.parse(cartItem);

    if(cartItem !== null){  
        if(cartItem[product.name] == undefined){
            cartItem = {
                ...cartItem,
                [product.name]: product
            }
        }
        cartItem[product.name].inCart += 1;
    }else{
        product.inCart = 1;
        cartItem = {
          [product.name]: product
    }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItem));
}

function totalPrice(product){
    let cartPrice = localStorage.getItem("totalPrice");
    

    if(cartPrice != null){
        cartPrice = parseInt(cartPrice);
        localStorage.setItem("totalPrice", cartPrice + product.price);
    }else{
        localStorage.setItem("totalPrice", product.price);
    }   
}

function displayCart(){
    let cartItem = localStorage.getItem("productsInCart");
    cartItem = JSON.parse(cartItem);
    let productContainer = document.querySelector(".products");
    let cartPrice = localStorage.getItem("totalPrice");

    console.log(cartItem)
    if( cartItem && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItem).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                 <ion-icon class="delete" name="close-circle-outline"></ion-icon>
                 <img src="${item.img}"</img>
                 <span> ${item.name} </span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
                <ion-icon id="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon id="increase"
                name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total"
                 <span>$${item.inCart * item.price},00</span>
            </div>
            `
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total </h4>
            <h4 class="basketTotal">$${cartPrice},00</h4>
        </div>
        <div class="buy-btn">
            <a  onclick="clearCart()" class="add-cart">Clear</a>
            <a class="add-cart" href="#">Buy</a>
        </div>
        `
    }else{
        productContainer.innerHTML = `
        <div class="empty-div">
            <h3 class="empty-cart">You haven´t added any products to the cart!</h3>
        </div>
        <div class="empty-btn">
            <a class="click" href="../secciones/shoes.html">Click here</a>
        </div>        
        `
    }
}


function clearCart(product){
    
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
    
    for(let i in cartItem) {
       if(cartItem != null){
           localStorage.removeItem('cartNumber',cartItem[i].inCart--);
           localStorage.removeItem('productsInCart',cartItem[i]);
           localStorage.removeItem('totalPrice');
           window.location.reload();
        } else {
            console.log("empty");
        }
       
    }
    
}


// function removeItem(product){
//     let cartItem = localStorage.getItem('productsInCart');
//     cartItem = JSON.parse(cartItem);

//     for(let i in cartItem) {
//         if(cartItem != null){
//             localStorage.removeItem('productsInCart',cartItem[i]);
//             localStorage.removeItem('totalPrice',cartItem[i]);
//             window.location.reload();
//         } else {
//             console.log("empty");
//         }

//     }
// }






let removeCartItemButtons = document.querySelectorAll(".delete");
for(let i=0; i < removeCartItemButtons.length; i++){
    let button = removeCartItemButtons[i];
   
    button.addEventListener('click', (e) => {
        let cartItem = localStorage.getItem('productsInCart');
        cartItem = JSON.parse(cartItem);
    
    for(let i in cartItem) {
       if(cartItem != null){
           localStorage.removeItem('cartNumbers',cartItem[i].inCart--);
           localStorage.removeItem('productsInCart',cartItem[i]);
           localStorage.removeItem('totalPrice');
        } else {
            console.log("empty");
        }
       
    }
        window.location.reload();
    })
}



displayCart();
