var grades=[80,77,88,95,68];
var sum=0;
for(var i=0; i < grades.length;i++){
    sum+=grades[i];
}

var average = sum / grades.length;
var res = '';

if((average < 60) && (average > 0)) {
    res = 'F';
}
else if((average > 61) && (average < 70)) {
    res = 'D';
}
else if((average > 71) && (average < 80)) {
    res = 'C';
}
else if((average > 81) && (average < 90)) {
    res = 'B';
}
else if((average > 91) && (average < 100)) {
    res = 'A';
}
console.log(res);