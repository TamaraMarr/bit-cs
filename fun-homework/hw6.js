'use strict'

function isPerfect(num) {
    var holder = 0;

    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            holder += i;
        }
    }

    if (holder/2 === num) {
        return true;
    } else {
        return false;
    }
}

var num = 14;

if (isPerfect(num)) {
    console.log("This is a perfect number.")
} else {
    console.log("This is not a perfect number.")
}
