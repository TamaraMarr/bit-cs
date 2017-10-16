var global = 123;

function myFunc() {
    console.log(global);
    var global = 1;
    console.log(global);
}

myFunc();