function add(a, b) {
    var sum = a + b;
    return sum;
}

function subtract(a, b) {
    var sub = a - b;
    return sub;
}

function divide(a, b) {
    var division = a / b;
    return division;
}

function multiply(a, b) {
    var mul = a * b;
    return mul;
}

function modulo(a, b) {
    var mod = a % b;
    return mod;
}

function equal (a, b){
    if(a===b){
        return true;
    } 
    else{
        return false;
    }
}

function print(a) {
    console.log("/////" + a + "\\\\\\\\\\");
}

function smiley (a){
    if(a===":)" || a===":D"){
        console.log("happy");
    }
    else if(a=== ":/" || a===":(" || a===":\\"){
        console.log("sad");
    }
    else{
        console.log("Not a smiley");
    }    
}

function first(a) {
    if(typeof(a) === 'number')
    {
        console.log(NULL);
    }
    else {
        console.log(a[0]);
    }
}

console.log(isNaN(4/"string"));