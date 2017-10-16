'use strict'

function wordInString(str, word) {
    var counter = 0;
    var times = 0;

    for (var i = 0; i < str.length; i++) {
        counter = 0;
        for (var j = 0; j < word.length; j++) {
            if (str[i + j] === word[j]) {
                counter++;
                if (counter === word.length) {
                    times++;
                }
            }
        }
    }
    
    // for (var i = 0; i < str.length; i++) {
    //     var match = true;
    //     for (var j = 0; j < word.length; j++) {
    //         if(str[i] !== word[j]) {
    //             match = false;
    //             break;
    //         }
    //     }
    //     if(match) {
    //         times++;
    //     }
    // }

    return times;
}

var str = 'The quick brown fox';
var word = 'fox';

console.log('Word ' + word + ' appears ' + wordInString(str, word) + ' times in this sentence.');

// function areStringsEqual(a, b) {
//     if (a.length !== b.length) {
//         return false;
//     }
    
//     var counter = 0;

//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === b[i]) {
//             counter++;
//         }
//     }

//     if (counter === a.length) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var a = "hell";
// var b = "hello";
// console.log(areStringsEqual(a, b));