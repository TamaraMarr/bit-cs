'is strict'

function returnDigits(num) {
    var holderArr = [];
    var str = num.toString();

    for (var i = 0; i < str.length; i++) {
        holderArr[i] = parseInt(str[i]);  
    }

    return holderArr;

}

var num = 12345;
console.log(returnDigits(num));