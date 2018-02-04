function isPerfect(num) {
    var temp = 0;

    for (var i = 0; i < num; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }

    if (temp === num && temp !== 0) {
        console.log("This is a perfect number");
    } else {
        console.log("This is not a perfect number");
    }
}

var n = 8128;
isPerfect(n)