'use strict'

// function filter(arr) 


function maxElement(arr) {
    var maxEle;
    var maxCurr;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            maxCurr = arr[i];
            if (arr[j] > maxCurr) {
                maxEle = arr[j];
            }
        }
    }

    return maxEle;
}

var arr = [5, 173, 12, 556, 87];
console.log(maxElement(arr));