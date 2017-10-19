function Planet(name, year) {
    this.name = name;
    this.year = year;
    this.turnsAroundSun = function () {
            return "Hello, my name is " + name + " and my year lasts for " + year + " Earth years.";
    };
}

var neptune = new Planet ("Neptune", "0,7");
var mercury = new Planet ("Mercury", "485,3");

console.log(mercury.turnsAroundSun());