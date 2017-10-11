function elementsArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        x = arr[i];
        for (var j = 0; j < x.length; j++) {
            console.log(x[j]);
        }
    }
}

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

elementsArray(a);