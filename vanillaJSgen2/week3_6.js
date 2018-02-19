// Write a function to convert a string to its abbreviated form.

function makeAbbreviation(string) {
    var splitNames = string.trim().split(" ");
    var initialsArr = [];

    for (var i = 0; i < splitNames.length; i++) {
        initialsArr[i] = splitNames[i][0];
    }

    var initials = initialsArr.join(".") + ".";

    return initials.toUpperCase();
}

console.log(makeAbbreviation("What are you talking about"));