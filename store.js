let cart = [];
const phone = "2347049884342"; // Put your WhatsApp number

const productList = document.getElementById("productList");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
<img src="${product.img}">
<h3>${product.name}</h3>
<p class="price">₦${product.price}</p>
<p>Stock: ${product.stock}</p>
<button onclick="addToCart('${product.name}',${product.price})">Add to Cart</button>
`;
    productList.appendChild(card);
});

function addToCart(name, price){
    cart.push({name, price});
    alert(name + " added to cart");
}

function checkout(){
    if(cart.length == 0){
        alert("Your cart is empty");
        return;
    }

    let message = "Hello, I want to order:\n";
    let total = 0;

    cart.forEach(item => {
        message += `${item.name} - ₦${item.price}\n`;
        total += item.price;
    });

    message += "Total: ₦" + total;

    let url = `https://wa.me/${phone}?text=` + encodeURIComponent(message);
    window.open(url, "_blank");
}
function searchProduct(){

let input = document.getElementById("search").value.toLowerCase()

let cards = document.querySelectorAll(".card")

cards.forEach(card => {

let title = card.querySelector("h3").innerText.toLowerCase()

if(title.includes(input)){
card.style.display="block"
}else{
card.style.display="none"
}

})

}
