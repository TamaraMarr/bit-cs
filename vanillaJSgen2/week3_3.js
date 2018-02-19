// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

function lettersInAlphabeticalOrder(string) {
    var newString = string.split("").sort().join("");
    return newString;
}

console.log(lettersInAlphabeticalOrder("hello"));