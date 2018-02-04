var arr = [3, 7, 8, 9, 3, 8, 3, 9, 9, 9];
var mostFrequent = 1;
var counter = 0;
var theItem;

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            counter++;
        }
    }
    if (mostFrequent < counter) {
        mostFrequent = counter;
        theItem = arr[i];
    }
    counter = 0;
}

console.log(theItem);