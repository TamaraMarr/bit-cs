function validator(f1, f2, f3, f4) {
    return {
        stringValidator: f1,
        passwordValidator: f2,
        colorValidator: f3,
        yearValidator: f4
    }
}

validator(isAllCapitals, doesContainDigits, isValidHexColor, isInInterval);

function isAllCapitals(str) {
    var capitalLettersCounter = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            capitalLettersCounter++;
        }
    }

    if (capitalLettersCounter !== str.length) {
        return false;
    }

    return true;
}

function doesContainDigits(str) {
    for (var i = 0; i < str.length; i++) {
        var parsedChar = parseInt(str[i]);

        if (!isNaN(parsedChar) && typeof parsedChar === "number") {
            return true;
        }
    }

    return false;
}

function isValidHexColor(color) {
    if (color[0] != "#" || color.length !== 7) {
        return false;
    }

    for (var i = 1; i < color.length; i++) {
        if ((color[i] >= 0 && color[i] <= 9) || (color.charCodeAt(i) >= 65 && color.charCodeAt(i) <= 70)) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

function isInInterval(n) {
    if (n >= 1900 && n <= 2018) {
        return true;
    }

    return false;
}