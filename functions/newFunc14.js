function BMI(weight, height) {
    var bmi = weight / (height*height);

    if (bmi <= 15) {
        console.log("Starvation.");
    } else if (bmi > 15 && bmi <= 17.5) {
        console.log("Anorexic.");
    } else if (bmi > 17.5 && bmi <= 18.5) {
        console.log("Underweight.");
    } else if (bmi > 18.5 && bmi <= 25) {
        console.log("Ideal.");
    } else if (bmi > 25 && bmi <= 30) {
        console.log("Overweight.");
    } else if (bmi > 30 && bmi <= 40) {
        console.log("Obese.");
    } else {
        console.log("Morbidly obese.");
    }
}

var weight = 65;
var height = 1.75;
BMI(weight, height);