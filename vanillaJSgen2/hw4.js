function getLastElement(arr, num) {
    if (!num) {
        num = 1;
    }

    var newArr = [];
    var newArrIndex = 0;

    for (var i = arr.length - num; i < arr.length; i++) {
        newArr[newArrIndex] = arr[i];
        newArrIndex++;
    }

    return newArr;
}

var arr = [7, 9, 0, -2];
var n = 1;
console.log(getLastElement(arr, n));