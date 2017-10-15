var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

// for (var i = 0; i < a.length; i++) {
//     var x = a[i];
//     for (var j = 0; j < x.length; j++) {
//         console.log(x[j]);
//     }
// }

// for (var i in a) {
//     var x = a[i];
//     console.log(a[i]);
//     for (var j in x) {
//         console.log(x[j]);
//     }
// }

var i = 0;

while (i < a.length) {
    var x = a[i];
    var j = 0;
    while(j < x.length) {
        console.log(x[j]);
        j++;
    }
    i++;
}