function mostExpensiveProduct(arr) {
    var mostExpensive = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].price > mostExpensive.price) {
            mostExpensive = arr[i];
        }
    }

    return mostExpensive.name.toUpperCase();
}
  
var shoppingList = [{name: 'apples', price: 100}, 
                    {name: 'juice', price: 80}, 
                    {name: 'bananas', price: 150}]
                  
console.log(mostExpensiveProduct(shoppingList));