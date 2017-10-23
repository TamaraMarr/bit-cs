// Write a JavaScript function that reverse a number.

function reverseNum (num) {
    var result;
    num = num.toString();
    result = num.split("").reverse().join("");
    result = parseInt(result);
    return result;
}

console.log(reverseNum(12345));