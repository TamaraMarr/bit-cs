function outer() {
    a = 5;
    function inner() {
        var a = 10;
        console.log(a);
    }
    inner();
    console.log(a);
    return a;
}
