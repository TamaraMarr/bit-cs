// var dog = {
//     name: 'Bogi',
//     occupation: 'sleepy head',
//     bark: function () {
//         console.log('Bow wow');
//     }
// };

// dog.bark();


// var speaker = {
//     name: 'Stevan',
//     yearOfBirth: '1990',
//     favouriteSport: 'Football',
//     mood: 'happy',
//     school: {
//         name: 'BiT',
//         address: 'Nemanjina 4'
//     },
//     speak: function () {
//         return 'Super';
//     },
//     findMood: function () {
//         return speaker.mood;
//     }

// };
// console.log(speaker.speak());
// console.log(speaker.findMood());


var shop = {
    cell: {
        name: 'Samsung',
        price: '500$',
        color: 'black'
    },
    mask: {
        price: '30$',
        color: 'white'
    },
    findPriceForBoth: function() {
        console.log (shop.cell.price);
    }
};

console.log(shop.cell.name)