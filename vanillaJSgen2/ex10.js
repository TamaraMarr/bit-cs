function makeNumArray(arr) {
    var newArr = [];
    var newArrIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && isFinite(arr[i]) && arr[i] !== undefined) {
            newArr[newArrIndex] = parseFloat(arr[i]);
            newArrIndex++;
        }
    }

    return newArr;
}

var arr = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(makeNumArray(arr));