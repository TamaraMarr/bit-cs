for (var i = 0; i < 10; i++) {
    console.log(i * i);
}

for (var i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is an even number.");
    }
    else {
        console.log(i + " is an odd number.");
    }
}

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
    
for (var i = 0; i < a.length; i++) {
    var x = a[i];
    for (var j = 0; j < x.length; j++) {
        console.log(x[j]);
    }
}

var sum = 0;

for (var i = 0; i <= 20; i++) {
    sum += i;
}

console.log(sum);

var grades = [80, 77, 88, 95, 68];
var sum = 0;

for (var i = 0; i < grades.length; i++) {
    sum += grades[i];
}

var avg = sum / grades.length;

if (avg < 60) {
    console.log("The average grade is F.");
}
else if (avg > 61 && avg < 70) {
    console.log("The average grade is D.");
}
else if (avg > 71 && avg < 80) {
    console.log("The average grade is C.");
}
else if (avg > 81 && avg < 90) {
    console.log("The average grade is B.");
}
else if (avg > 91 && avg < 100) {
    console.log("The average grade is A.");
}