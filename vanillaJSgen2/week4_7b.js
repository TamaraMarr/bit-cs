function doesContainDigits(str) {
    for (var i = 0; i < str.length; i++) {
        var parsedChar = parseInt(str[i]);

        if (!isNaN(parsedChar) && typeof parsedChar === "number") {
            return true;
        }
    }
    
    return false;
}

console.log(doesContainDigits("H3llo"));