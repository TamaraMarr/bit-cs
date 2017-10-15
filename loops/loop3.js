var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var y = x[0];

for (var i = 1; i < x.length; i++) {
    y += x[i];
}

console.log(y);