function Animal(name, species) {
    this.name = name;
    this.species = species;
    this.whatYouSay = function () {
        return "My name is " + this.name +
            " and I am a " + this.species;
    };
}

var cat = new Animal('Tuta', 'cat');
var dog = new Animal('Deda', 'dog');

console.log(cat.whatYouSay());
console.log(dog.whatYouSay());