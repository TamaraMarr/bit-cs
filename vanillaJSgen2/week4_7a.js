function isAllCapitals(str) {
    return str === str.toUpperCase();
}
    
// Nisam hteo da osudjujem ali ovo je bas za osudu :p
// var capitalLettersCounter = 0;

// for (var i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
//         capitalLettersCounter++;
//     }
// }

// if (capitalLettersCounter !== str.length) {
//     return false;
// }

// return true;

console.log(isAllCapitals("HELLO"));