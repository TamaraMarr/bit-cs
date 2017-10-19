var original = { number: 13 };
var copy = original;

copy.number = 15;

console.log(original.number);

function Copy (original) {
    this.number = original.number
};

var copycopy = new Copy(original);

console.log(copycopy.number);

copycopy.number = 27;

console.log(copycopy.number);
console.log(original.number);