'use strict'

function filterAndMax(arr) {
    var newArr = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') {
            newArr[counter] = arr[i];
            counter++;
        }
    }

    var maxEle;
    var maxCurr;

    for (var i = 0; i < newArr.length; i++) {
        for (var j = 1; j < newArr.length; j++) {
            maxCurr = newArr[i];
            if (newArr[j] > maxCurr) {
                maxEle = newArr[j];
            }
        }
    }
    return maxEle;
}

var arr = [5992, 600, false, 5, 87];
console.log(filterAndMax(arr));