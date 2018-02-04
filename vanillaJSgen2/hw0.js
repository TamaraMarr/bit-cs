var position = 9;
var string = "My random string";
var insertedString = "JS ";
var newString = "";

if (!position) {
    position = 0;
}

for (var i = 0; i < string.length; i++) {
    if (i === position) {
        newString += insertedString;
    }
    newString += string[i];
}

console.log(newString);