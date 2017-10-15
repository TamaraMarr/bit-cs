function sum(arr) {
    var res = 0;
    for(var i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

function prod(arr) {
    var res = 1;
    for(var i = 0; i < arr.length; i++) {
        res *= arr[i];
    }
    return res;
}



var niz = [2, 4, 6, 8];

console.log(sum(niz));
console.log(prod(niz));