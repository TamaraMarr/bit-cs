var string = "My random string";
var letter = "n";
var firstOccurrence = 0;


for (var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
        firstOccurrence = i + 1;
        break;
    } else {
        firstOccurrence = -1;
    }
}

console.log(firstOccurrence);