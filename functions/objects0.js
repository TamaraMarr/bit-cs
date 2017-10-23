function changeBase(num, base, newBase) {
    var result;

    if (base !== 2 && base !== 8 && base !== 10 && base !== 16 || newBase !== 2 && newBase !== 8 && newBase !== 10 && newBase !== 16) {
        return 1;
    } else {
        result = parseInt(num, base).toString(newBase);
        return result;
    }    
}

if (changeBase(15, 10, 8) == 1) {
    console.log("Please enter a valid base.")
} else {
    console.log(result);
}