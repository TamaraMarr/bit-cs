function humanize(num) {
    var n = num.toString();

    var broj = n[n.length - 1];

    if (n % 100 >= 11 && n % 100 <= 13) {
        return n + "th";
    } else if (broj === "1") {
        return n + "st";
    } else if (broj === "2") {
        return n + "nd";
    } else if (broj === "3") {
        return n + "rd";
    } else {
        return n + "th";
    }
}

var num = 153;
console.log(humanize(num));