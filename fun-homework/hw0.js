'use strict'

function insertStr(beginningString, insertedString, position) {
    var newString = "";

    if (position === undefined) {
        position = 0;
    }

    for (var i = 0; i < beginningString.length; i++) {
        if (i === position) {
            for (var j = 0; j < insertedString.length; j++) {
                newString += insertedString[j];
            }
        }
        newString += beginningString[i];
    }

    return newString;
}

var beginningString = "My random string.";
var insertedString = "JS";
var position = 5;

console.log(insertStr(beginningString, insertedString, position));

// var firstPart = beginningString.slice(0, position);
// var secondPart = beginningString.slice((position), beginningString.length);

// newString = firstPart + insertedString + secondPart;
// console.log(newString);