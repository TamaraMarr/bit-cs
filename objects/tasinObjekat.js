var cats = {
    names: {
        cat1: 'Tuta',
        cat2: 'Deda'
    },
    breed: 'Street cat',
    colors: {
        tuta: 'Tortoise shell',
        deda: 'Black'
    },
    actions: {
        sleep: function () {
            console.log("All day long, baby.");
        },
        knockOver: function () {
            console.log("I knock over all your shit, hooman!");
        },
        meow: function () {
            console.log("I meow exclusively at 5AM.");
        }
    }
    
};

function Cat () {
    this.cute = true;
}

cats = new Cat();

function Animal () {
    this.
}

console.log(cats.cute);