function createArray(num, value) {
    var newArr = [];

    for (var i = 0; i < 6; i++) {
        newArr[i] = value;
    }

    return newArr;
}

var num = 6;
var value = null;
console.log(createArray(num, value));