'use strict'

var vowels = function(str) {
    var allVowels = ['a', 'e', 'i', 'o', 'u'];
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        for(var j = 0; j < allVowels.length; j++) {
            if (str[i] === allVowels[j]) {
                counter++;
            }
        }
    }

    return counter;
}

var str = "aeiou";
console.log(vowels(str));