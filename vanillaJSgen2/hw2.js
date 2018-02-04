var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var newArr = [];
var newArrIndex = 0;

for (var i = 0; i < arr.length; i++) {
    if (!arr[i]) {
        continue;
    }

    newArr[newArrIndex] = arr[i];
    newArrIndex++;
}

console.log(newArr);