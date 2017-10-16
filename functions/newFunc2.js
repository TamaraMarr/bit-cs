'use strict'

function combineArr(arr1, arr2) {
    var newArr = [arr1[0]];
    var counter1 = 0;
    var counter2 = 1;

    for (var i = 1; i < arr1.length + arr2.length; i++) {
        if (i % 2 === 1) {
            newArr[i] = arr2[counter1];
            counter1++;
        } else {
            newArr[i] = arr1[counter2];
            counter2++;
        }
    }
    
    return newArr;
}

var arrr1 = ['a', 'b', 'c'];
var arrr2 = [1, 2, 3];
var combine = combineArr;

console.log(combine(arrr1, arrr2));