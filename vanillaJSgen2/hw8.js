function shortenEmail(email) {
    var newEmail = "";
    var counter = 0;
    var secondPart = "";

    for (var i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            for (var j = 0; j < email.length - i; j++) {
                secondPart += email[j + i];
            }
            break;
        }
        counter++;
    }

    for (var i = 0; i < counter / 2; i++) {
        newEmail += email[i];
    }

    newEmail = newEmail + "..." + secondPart;

    return newEmail;
}

var address = "myemailaddress@bgit.rs";
console.log(shortenEmail(address));

// function shortenEmail(email) {
//     var newEmail = "";
//     var emailArr = email.split("@");
//     var firstPart = emailArr[0];

//     for (var i = 0; i < firstPart.length / 2 ; i++) {
//         newEmail += firstPart[i];
//     }

//     newEmail = newEmail + "...@" + emailArr[1];

//     return newEmail;
// }

// var address = "myemailaddress@bgit.rs";
// console.log(shortenEmail(address));