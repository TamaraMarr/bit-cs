var string = "My random string";
var letter = "n";
var counter = 0;

for (var i = 0; i < string.length; i++) {
    var lowerCaseString = string.toLowerCase();

    if (lowerCaseString[i] === letter) {
        counter++;
    }
}

console.log(counter);