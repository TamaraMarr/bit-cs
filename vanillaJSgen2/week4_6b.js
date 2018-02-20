function calculateTotalPrice(arr) {
    var totalPrice = 0;

    for (var i = 0; i < arr.length; i++) {
        totalPrice += arr[i].price;
    }

    return totalPrice;
}

var shoppingList = [{name: 'apples', price: 100}, 
                    {name: 'juice', price: 80}, 
                    {name: 'bananas', price: 150}]
                    
console.log(calculateTotalPrice(shoppingList));
