function howLongTillRetirement(gender, age) {
    var mRetirementAge = 65;
    var fRetirementAge = 60;
    var yearsTillRetirement;

    if (gender === "m" || gender === "M") {
        if (age >= mRetirementAge) {
            yearsTillRetirement = "You are already retired!";
        } else {
            yearsTillRetirement = mRetirementAge - age;
        }
    } else if (gender === "f" || gender === "F") {
        if (age >= fRetirementAge) {
            yearsTillRetirement = "You are already retired!";
        } else {
            yearsTillRetirement = fRetirementAge - age;
        }
    } else {
        console.log("Please enter valid values");
        return;
    }

    return yearsTillRetirement;
}

var gender = "m";
var age = 57;
console.log("You have " + howLongTillRetirement(gender, age) + " years left till retirement");