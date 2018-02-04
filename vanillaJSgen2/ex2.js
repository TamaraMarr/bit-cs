var string = "ha";
var newString = string;
var n = 5;

for (var i = 0; i < n-1; i++) {
    newString += string;
}

console.log(newString);