function shortenString(input, num) {
    var shortString = "";

    for (var i = 0; i < num; i++) {
        shortString += input[i];
    }

    shortString += "...";

    return shortString;
}

var string = "My random string";
var n = 11;

console.log(shortenString(string, n));