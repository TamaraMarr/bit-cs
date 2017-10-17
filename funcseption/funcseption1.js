function square(a) {
    return a * a;
}

function multiplyBy2(a, b, c, callback) {
    var result = [];

    for (var i = 0; i < arguments.length - 1; i++) {
        result[i] = callback(arguments[i] * 2);
    }

    return result;
}

function addOne (a) {
    return a + 1;
}

function addOneDivide10(a, b, c, callback) {
    var result = [];

    for (var i = 0; i < arguments.length - 1; i++) {
        callback(arguments[i]);
    }

    for (var i = 0; i < arguments.length - 1; i++) {
        result[i] = arguments[i] / 10;
    }

    return result;
}

function theOne () {
    var func1 = arguments[arguments.length - 1];
    var func2 = arguments[arguments.length - 2];
    var result1 = [];
    var result;

    for (var i = 0; i < arguments.length - 2; i++) {
        result1 = func1(arguments[i]);
        result = func2(result1);
    }
}


addOneDivide10(multiplyBy2(2, 3, 4, square, multiplyBy2);
