// Write a function that can pad (left, right) a string to get to a determined length.

function pad(padding, string, place) {
    string = string + '';

    if (string === undefined) {
        return padding;
    } else if (place === '1') {
        return (padding + string.slice(-padding.length));
    } else {
        return (string + padding).substring(0, padding.length);
    }
}

console.log(pad("00000", "234", 1));