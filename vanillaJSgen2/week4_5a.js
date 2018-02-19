function elementsLessThanE(arr, element) {
    var elementsLessThanE = [];
    var index = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < element) {
            elementsLessThanE[index] = arr[i];
            index++;
        }
    }

    return elementsLessThanE;
}

console.log(elementsLessThanE([3, 4, 7, 9, 2, 6, 0, 1, 9], 5));
