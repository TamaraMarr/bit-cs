// function counterChar(string, letter) {
//     var tamara = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (letter === string[i]) {
//             tamara++;
//         }
//     }
//     console.log(tamara);
// }

// counterChar("Seee Ma", "e");

// // finds first appearance of a character
var str = "Seee Ma";
console.log(str.match('e'));

// counts the number of occurances
var splitArr = str.split("e");

console.log(splitArr.length - 1);