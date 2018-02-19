// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

function changeBase(num, initialBase, newBase) {
    if ((initialBase && changeBase) < 2 || (initialBase && changeBase) > 36) {
        return "The base must be between 2 and 36.";
    }

    var numWithNewBase = (parseInt(num + '', initialBase)).toString(newBase);
    
    return numWithNewBase;
}

console.log(changeBase('ff', 16, 10));