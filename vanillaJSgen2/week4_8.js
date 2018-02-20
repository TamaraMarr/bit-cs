function daysTillBDay(birthday) {
    var today = new Date().getTime();
    var bday = new Date(birthday).getTime();

    var daysTillBDay = Math.round((bday - today)/1000/3600/24);

    return daysTillBDay;
}

console.log(daysTillBDay("13 October 2018"));