var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var string = "";

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === undefined || arr[i] === null || isNaN(arr[i]) || arr[i] === Infinity) {
        continue;
    }

    string += arr[i];
}

console.log(string);