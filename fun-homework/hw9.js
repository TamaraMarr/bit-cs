var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostFreq = arr[0];
var mostFreqCurr = arr[0];
var times = 0;
var timesCurr = 0;

for (var i = 0; i < arr.length; i++) {
    timesCurr = 0;
    for (var j = 1; j < arr.length; j++) {
        mostFreqCurr = arr[i];
        if (arr[i] === arr[j]) {
            timesCurr++;
        }
    }

    if (timesCurr > times) {
        times = timesCurr;
        mostFreq = mostFreqCurr;
    }    
}

console.log(mostFreq);