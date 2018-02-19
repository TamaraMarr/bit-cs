function eleBeginningWithPro(arr) {
    var newArr = [];
    var newArrIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().slice(0, 3) === "pro") {
            newArr[newArrIndex] = arr[i];
            newArrIndex++;
        }
    }

    return newArr;
}

function filterElements(arr, f) {
    return f(arr);
}

console.log(filterElements(["projection", "javascript", "promise"], eleBeginningWithPro));