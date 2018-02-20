function timeTripTakes(departureTime, arrivalTime) {
    var depTime = new Date(departureTime);
    var arTime = new Date(arrivalTime);

    console.log(depTime);

    var seconds = arTime.getSeconds() - depTime.getSeconds();
    var mins = arTime.getMinutes() - depTime.getMinutes();
    var hours = arTime.getHours() - depTime.getHours();

    console.log(seconds, mins, hours);
}

var departure = "8:22:13";
var arrival = "11:43:22";

timeTripTakes(departure, arrival);