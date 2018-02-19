function elementsLessThanMiddle(arr) {
    if (arr.length % 2 === 0) {
        return "ERROR";
    }

    var middleElementIndex = (arr.length - 1) / 2;
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[middleElementIndex]) {
            counter++;
        }
    }

    return counter;
}

console.log(elementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));