'use strict'

function multipTable() {
    var multipTab = [];
    var j = 0;

    for (var i = 1; i <= 12; i++) {
        multipTab[j] = (i + " * " + i + " = " + i*i);
        j++;
    }

    console.log(multipTab);
}

multipTable();