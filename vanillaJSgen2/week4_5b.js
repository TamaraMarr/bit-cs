function eleBeginningWithPro(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        var prefix = arr[i].toLowerCase().slice(0, 3);

        if (prefix === "pro") {
            newArr.push(elem);
        }
    }

    return newArr;
}

function filterElements(arr, f) {
    return f(arr);
}

console.log(filterElements(["projection", "javascript", "promise"], eleBeginningWithPro));