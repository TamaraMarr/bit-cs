function oneString(arr) {
    var holder = arr[0];
    
    for (var i = 1; i < x.length; i++) {
        holder += arr[i];
    }
    return holder;
}

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

console.log(oneString(x));