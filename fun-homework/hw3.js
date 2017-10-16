'use strict'

function reverse(num) {
    var numStr = num.toString();
    var newStr = [];

    for (var i = numStr.length - 1; i >= 0 ; i--) {
        newStr += numStr[i];
    }

    var newNum = parseInt(newStr);

    return newNum;
}

var num = 12345;

console.log(reverse(num));