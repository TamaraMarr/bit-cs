// Write a JavaScript function that reverses a number.

function reverseNum(n) {
    var reversedNum = n + "";
    reversedNum = reversedNum.split("").reverse().join("")

    return reversedNum
}

console.log(reverseNum(25679));