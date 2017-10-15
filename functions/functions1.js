function fiveAndThree(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return num;
    } else {
        return 0;
    }
}

function is5Or3Devisable(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

function sumFromTo(min, max) {
    var sum = 0;
    for (var i = min; i <= max; i++) {

        if (is5Or3Devisable(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumFromTo(500, 1000));