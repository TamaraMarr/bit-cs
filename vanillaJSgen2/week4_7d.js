function isInInterval(n) {
    if (n >= 1900 && n <= 2018) {
        return true;
    }

    return false;
}

console.log(isInInterval(1955));