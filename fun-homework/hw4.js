'use strict'

function lastElement (arr, n) {
    var last = arr[arr.length - 1];
    var lastCouple = [];
    var counter = 0;

    if (n !== undefined) {
        for (var i = arr.length - n; i < arr.length; i++) {
            lastCouple[counter] = arr[i];
            counter++
        }
        return lastCouple;
    }

    return last;
}

var arr = [7, 9, 0, -2];

console.log(lastElement(arr, 2));