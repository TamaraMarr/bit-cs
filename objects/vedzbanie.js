var stefanObj = {
    job: 'nagger',
    say: function (who) {
        return 'Hey ' + who + ', I am a ' + this.job;
    }
};

//console.log(stefanObj.say('Nag, nag, nag'));

var tamaraObj = {
    job: 'hilarity'
};
//console.log(stefanObj.say.call(tamaraObj, 'happiness'));

function whatIsIt() {
    return this.toString();
}

var superman = {};

whatIsIt.apply(superman);

var personProto = {
    calculateAge: function () {
        var year = new Date().getFullYear();
        var age = year - this.yob;
        return age;
    },
    pronounce: function (timeOfDay, job) {
        return 'Good ' + timeOfDay + '! I am a ' + job + '.';
    }
}
var jovajna = Object.create(personProto);
jovajna.yob = 1989;

var marko = Object.create(personProto);
marko.pronounce = marko.pronounce.bind(marko,'day');
console.log(marko.pronounce('programmer'));