
var qty = 5
var price = 10000
var diskon = 50

function totalPrice(qty,price,diskon) {
    return qty * price * (diskon / 100)
}

console.log(totalPrice(qty,price,diskon))