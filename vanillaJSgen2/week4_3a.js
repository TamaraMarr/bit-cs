function isOddNumOfElements(arr) {
    if (arr.length % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(isOddNumOfElements([1, 2, 9, 2, 1]));