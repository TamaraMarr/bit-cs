function sumOfProd(min, max) {
    var res = 0; 
    for (var i = min; i <= max; i++) {
        res = res + (i*i);
    }
    return res;
}


console.log(sumOfProd(0, 20));