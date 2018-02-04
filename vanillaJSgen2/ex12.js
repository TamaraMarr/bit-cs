function numberHumanizer(num) {
    var output;

    if (num % 100 >= 11 && num % 100 <= 13) {
        output = num + "th";
    } else if (num % 10 === 2 && num !== 12) {
        output = num + "nd";
    } else if (num % 10 === 3 && num !== 13) {
        output = num + "rd";
    } else if (num % 10 === 1 && num !== 11) {
        output = num + "st";
    } else {
        output = num + "th";
    }

    return output;
}

var n = 155;
console.log(numberHumanizer(n));