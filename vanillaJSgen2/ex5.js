var string = "My random string";
var letter = "m";
var lastOccurrence = 0;


for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] === letter) {
        lastOccurrence = i + 1;
        break;
    } else {
        lastOccurrence = -1;
    }
}

console.log(lastOccurrence);