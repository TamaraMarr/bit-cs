var num1 = -21;
var num2 = 17;
var num3 = -5;
var num4 = 57;
var num5 = 35;
var biggestNum;

if(num1 >= num2) {
    biggestNum = num1;
} else {
    biggestNum = num2;
}

if(num3 > biggestNum) {
    biggestNum = num3;
} else if(num4 > biggestNum) {
    biggestNum = num4;
} else {
    biggestNum = num5;
}

console.log("The biggest numer is " + biggestNum);