// Write a function to split a string and convert it into an array of words.

function arrayOfWords(string) {
    var arr = string.trim().split(" ");

    return arr;
}

console.log(arrayOfWords("Hey there, handsome!"));
