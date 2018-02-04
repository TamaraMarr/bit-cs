function findWordInString(string, word) {
    var counter = 0;
    var wordOccurences = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === word[0]) {
            for (var j = 1; j < word.length; j++) {
                if (string[j + i] === word[j]) {
                    counter++;
                }
                if (counter + 1 === word.length) {
                    wordOccurences++;
                }
            }
            counter = 0;
        }
    }

    return wordOccurences;
}

var string = "Pretty fox jumped over the other pretty fox";
var word = "fox";
console.log("The word " + word + " occurs " + findWordInString(string, word) + " times in the given string.");