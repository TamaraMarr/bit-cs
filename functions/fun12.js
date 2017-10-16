function retirement(gender, yearOfBirth) {
    var age = 2017 - yearOfBirth;
    var retirementM = 65;
    var retirementF = 60;
    var yearsLeft;
    var yearsLeftM = retirementM - age;
    var yearsLeftF = retirementF - age;

    
    if(yearsLeftF <= 0 || yearsLeftM <= 0) {
         return "You are already retired.";
     } else if(gender === "f" || gender === "female") {
        return yearsLeftF;
    } else if (gender === "m" || gender === "male") {
        return yearsLeftM; 
    } else {
        return "Please enter your gender in f/m or female/male format.";
    }
}

var gender = "f";
var year = 1955;

console.log(retirement(gender, year));