var removeDuplicates = function(arr) {
    var j = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            }
        }
    }

    return arr;
}

console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));