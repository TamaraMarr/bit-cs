'use strict'

function filterAndMax(arr) {
    var newArr = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            newArr[counter] = arr[i];
            counter++;
        }
    }

    var maxEle = newArr[0];

    for (var i = 0; i < newArr.length; i++) {
        if (maxEle < newArr[i]) {
            maxEle = newArr[i];
        }
    }
    return maxEle;
}

var arr = [5992, 600, 500, 3000, 59605];
console.log(filterAndMax(arr));