function isPrime(num) {
    for (var i = 2; i < num; i++) { 
        if (num % i === 0) {
            return "The number is not a prime number.";
        }  
    }
    return "The number is a prime number."; 
}

var num = 13;
console.log(isPrime(num));
