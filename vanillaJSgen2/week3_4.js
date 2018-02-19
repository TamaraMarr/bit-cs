// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

function alphabetizeWords(string) {
    var newString = string.split(" ").sort().join(" ");

    return newString;
}

console.log(alphabetizeWords("Crazy Peppito Big Apple Bees"));