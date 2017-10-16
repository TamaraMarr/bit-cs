function hideAddress(address) {
    var atPosition;

    for (var i = 0; i < address.length; i++) {
        if (address[i] === '@') {
            atPosition = i;
            break;
        }
    }

    var firstPartLength = atPosition;
    var dots = Math.floor(firstPartLength / 2);
    var firstDotInd = atPosition - dots;

    var hiddenAddress = '';
    for(var i = 0; i < address.length; i++){
        if (i < firstDotInd) {
            hiddenAddress += address[i];
        } else if (i < atPosition) {
            hiddenAddress += '.';
        } else {
            hiddenAddress += address[i];
        }
    }

    return hiddenAddress;
}

var address = 'tasha.m.bg@gmail.com';

console.log(hideAddress(address));