function replaceSpaces(string, separator) {
    var separator = separator || "-";
    var output = "";

    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            output += separator;
        } else {
            output += string[i];
        }
    }

    return output;
}

var string = "My random string";
var separator = "_";

console.log(replaceSpaces(string, separator));