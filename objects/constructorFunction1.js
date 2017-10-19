function Species(type, planet) {
    this.type = type;
    this.planet = planet;
    this.whatYouSay = function () {
        return "Hello, I'm from " + planet + " and I am a " + type + ".";
    };
}

var people = new Species('human', 'Earth');
var tasha = new Species('vegan supereme', 'Veganville');

console.log(tasha.whatYouSay());