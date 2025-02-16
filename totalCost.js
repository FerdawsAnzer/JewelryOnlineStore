let itemCount = 0;
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0.00;

function addToCart(price, description) {
    itemCount++;
    totalPrice += price;
    
    let deliveryCost;
    if (totalPrice > 1000) {
        deliveryCost = 0;
    } else {
        deliveryCost = totalPrice * 0.10;
    }
    
    let finalPrice = totalPrice + deliveryCost;
    
    localStorage.setItem('itemCount', itemCount);
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));

}





