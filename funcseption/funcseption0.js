'use strict'

// function multiplyBy2() {
//     var newArr = [];

//     for (var i = 0; i < arguments.length; i++) {
//         newArr[i] = arguments[i]*2;
//     }

//     return newArr;
// }

// function square(a) {
//     var result = a*a;
//     return result;
// }

function multiplyThenSquare() {
    var newArr = [];
    var callback = arguments[arguments.length - 1];

    for (var i = 0; i < arguments.length - 1; i++) {
        newArr[i] = callback(arguments[i] * 2);
    }
    
    return newArr;
}

console.log(multiplyThenSquare(2, 3, 4, 5, 6, function (a) {return a*a}));