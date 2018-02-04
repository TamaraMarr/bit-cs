function reverseNumber(num) {
    var newNum = 0;
    var multiple = 1;
    var numString = num.toString();

    for (var i = 0; i < numString.length; i++) {
        newNum = newNum + (parseInt(numString[i]) * multiple);
        multiple *= 10;
    }

    return newNum;
}

var num = 98765;
console.log(reverseNumber(num));