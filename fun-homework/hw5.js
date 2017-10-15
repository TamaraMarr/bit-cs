function preFilled(num, smth) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr[i] = smth;
    }
    return arr;
}

var num = 5;
var smth = "fuckingAwesome";

console.log(preFilled(num, smth));