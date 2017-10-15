var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var str = "";

for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && (arr[i] !== undefined) && (arr[i] !== null) && (arr[i] !== Infinity)) {
        str += arr[i];
    }
}

console.log(str);