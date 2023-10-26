var items = [
    {names:"This was out pact", price:7.49, quantity:0},
    {names:"To Kill a Mockingbird", price:4.59, quantity:0},
    {names:"Pride and Prejudice", price:6.80, quantity:0},
    {names:"JK Rowling",price:10, quantity:0},
    {names:"Ruskin Bond",price:7.29, quantity:0},
    {names:"Jeff Kinney",price:4.99, quantity:0},
    {names:"Dart Board",price:17.49, quantity:0},
    {names:"Connect 4",price:19.99, quantity:0},
    {names:"Jenga",price:20.99, quantity:0},
    {names:"Monopoly",price:19.49, quantity:0},
    {names:"Bookmarks",price:12.49, quantity:0},
    {names:"Birthday card",price:19.99, quantity:0},
    {names:"Stuffed toys",price:15.99, quantity:0},
    {names:"Dream catcher drawing",price:18.49, quantity:0}
]
const cart = document.getElementById("cart-value")
count_of_cart = 0
Sum = 0


var buttons = document.getElementsByClassName("button")
for (let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        items[i].quantity += 1;
        count_of_cart += 1;
        cart.textContent = count_of_cart;
        
    })
}

document.getElementById("cart").addEventListener("click", function(){
    for (let j = 0; j<items.length; j++){
        if (items[j].quantity > 0){
            Sum += items[j].price * items[j].quantity;
            console.log(`Item name: ${items[j].names} - quantity:  ${items[j].quantity}`)
            Sum += items[j].price
        }
    }
    Sum = Sum.toFixed(2)
    Sum = String(Sum).split(".")
    console.log(`The Sum amount is ${Sum[0]}$ and ${Sum[1]}cents`)
})




