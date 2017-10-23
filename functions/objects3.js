function alphabetizeWords (str) {
    var capitalizeAgain = [];
    var position = [];
    var counter = 0;

    var arr = str.split(" ");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 91) {
            capitalizeAgain[counter] = arr[i];
            position = i;
            arr[i] = arr[i].toLowerCase();
        }
    }
    
    var sorted = arr.sort();

    var index = 0;

    for (var i = 0; i < capitalizeAgain.length; i++) {
        var str = capitalizeAgain[i];
        index = sorted.indexOf(arr[i]);
        
    }

    return sorted;
}

var str = 'Merry had a little lamb';
console.log(alphabetizeWords(str));