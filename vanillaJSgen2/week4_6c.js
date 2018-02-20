function calculateAveragePrice(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].price;
    }
    
    var averagePrice = sum / arr.length;

    return averagePrice;
}
  
var shoppingList = [{name: 'apples', price: 100}, 
                    {name: 'juice', price: 80}, 
                    {name: 'bananas', price: 150}]
                  
console.log(calculateAveragePrice(shoppingList));