'use strict'

function rotate(arr, n) {
    var newArr = [arr[n]];
    var counter = 1;

    for (var i = n + 1; i < arr.length; i++) {
        newArr[counter] = arr[i];
        counter++;
    }

    // counter++;

    for (var j = 0; j < n; j++) {
        newArr[counter] = arr[j];
        counter++;
    }

    return newArr;
}

var arr = [1,2,3,4,5,6];
var n = 5;

console.log(rotate(arr, n));