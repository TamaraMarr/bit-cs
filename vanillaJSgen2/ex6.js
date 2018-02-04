var string = "My random string";
var arr = [];
var arrIndex = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
        arr[arrIndex] = null;
    } else {
        arr[arrIndex] = string[i];
    }

    arrIndex++;
}

console.log(arr);