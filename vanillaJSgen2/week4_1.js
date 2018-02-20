var duplicateArrElements = function(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);
    }

    return newArr;
}

console.log(duplicateArrElements([2, 4, 7, 11, -2, 1]));