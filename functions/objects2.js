function alphabetize(str) {
    var result = str.split('').sort().join('');
    return result;
}

var str = 'string';
console.log(alphabetize(str));