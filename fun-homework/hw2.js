function filterFalsy(arr) {
    var newArr = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) !== true && arr[i] !== false
            && arr[i] !== undefined && arr[i] !== null
            && arr[i] !== 0 && arr[i] !== '') {
                newArr[counter] = arr[i];
                counter++
            }
    }
    
    return newArr;
}

var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(filterFalsy(arr));