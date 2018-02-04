var num = 0;
var counter = 0;

if (num <= 0) {
    console.log("Please enter a valid value");
    return;
}

for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
        counter++;
    }
}

if (counter > 2) {
    console.log("This is not a prime number");
} else {
    console.log("This is a prime number");
}