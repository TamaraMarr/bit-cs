var global = 123;
var nekoLudilo = 45;

function myFunc() {
    var global;
    console.log(nekoLudilo);
    global = 1;
    var nekoLudilo = 47;
    console.log(global);
    return nekoLudilo;
}

console.log(myFunc());
console.log(nekoLudilo);
console.log(global);