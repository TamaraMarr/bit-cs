var duplicateArrElements = function(arr) {
    var newArr = [];
    var newArrIndex = 0;

    for (var i = 0; i < arr.length; i++, newArrIndex+=2) {
        newArr[newArrIndex] = arr[i];
        newArr[newArrIndex + 1] = arr[i];
    }

    return newArr;
}

console.log(duplicateArrElements([2, 4, 7, 11, -2, 1]));