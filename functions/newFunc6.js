'use strict'

function centToFahr(temperature) {
    var temperature = temperature * 9/5 + 32;

    return temperature;
}

var temp = 45;

console.log(centToFahr(temp));