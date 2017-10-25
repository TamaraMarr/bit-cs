'use strict';

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname;
};

function Seat(number, category) {
    this.number = number || Math.floor(Math.random() * 90 + 10);
    this.category = (function() {
        if (category === 'b') {
            return 'business';
        } else if (category === 'e') {
            return 'economy';
        } else {
            return 'economy';
        }
    })();
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
}

Passenger.prototype.getData = function() {
    return '\t\t' + this.seat.number + ', ' + this.seat.category.toUpperCase() + ', ' + this.person.getData() + '\n';
};

function Flight(relation, date) {
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPass = [];
}

Flight.prototype.getData = function() {
    var splitRelation = this.relation.split(' - ');
    var depart = splitRelation[0];
    var arrival = splitRelation[1];

    var shortDepartureName = depart[0];
    var shortArrivalName = arrival[0];
    var shortDepartureNameCons = '';
    var shortArrivalNameCons = '';

    // Proveriti da li moze ovako
    // for (var i = 0; i < depart.length; i++) {
    //     if(depart[i] === 'a' || depart[i] === 'e' || depart[i] === 'i' || depart[i] === 'o' || depart[i] === 'u' || depart[i] === ' ') {
    //         continue;
    //     } else {
    //         shortDepartureNameCons += depart[i];
    //     }
    // }
    // for (var i = 0; i < arrival.length; i++) {
    //     if(arrival[i] === 'a' || arrival[i] === 'e' || arrival[i] === 'i' || arrival[i] === 'o' || arrival[i] === 'u' || arrival[i] === ' ') {
    //         continue;
    //     } else {
    //         shortArrivalNameCons += arrival[i];
    //     }
    // }

    for (var i = 1; i < depart.length - 1; i++) {
        if(depart[i] === 'a' || depart[i] === 'e' || depart[i] === 'i' || depart[i] === 'o' || depart[i] === 'u' || depart[i] === ' ') {
            continue;
        } else {
            shortDepartureName += depart[i];
            break;
        }
    }
    for (var i = depart.length - 1; i > 1; i--) {
        if(depart[i] === 'a' || depart[i] === 'e' || depart[i] === 'i' || depart[i] === 'o' || depart[i] === 'u' || depart[i] === ' ') {
            continue;
        } else {
            shortDepartureName += depart[i];
            break;
        }
    }

    for (var i = 1; i < arrival.length - 1; i++) {
        if(arrival[i] === 'a' || arrival[i] === 'e' || arrival[i] === 'i' || arrival[i] === 'o' || arrival[i] === 'u' || arrival[i] === ' ') {
            continue;
        } else {
            shortArrivalName += arrival[i];
            break;
        }
    }
    for (var i = arrival.length - 1; i > 1; i--) {
        if(arrival[i] === 'a' || arrival[i] === 'e' || arrival[i] === 'i' || arrival[i] === 'o' || arrival[i] === 'u' || arrival[i] === ' ') {
            continue;
        } else {
            shortArrivalName += arrival[i];
            break;
        }
    }

    var result = (shortDepartureName.toUpperCase() + ' - ' + shortArrivalName.toUpperCase());


    return '\t' + this.date + ', ' + result + '\n';
};

Flight.prototype.addPassenger = function (passenger) {
    // if (this.listOfPass.length > 100) {
    //     throw new Error('You have exceded the allowed number of passengers!');
    // }

    // var seat = passenger.seat.number;
    // for(var i = 0; i < this.listOfPass.length; i++) {

    // }
    this.listOfPass.push(passenger);
};

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
}

Airport.prototype.addFlight = function (flight) {
    this.listOfFlights.push(flight);
};

Airport.prototype.getData = function() {
    var flights = this.listOfFlights;
    var totalNumOfPass = 0;
    var flightsData = '';

    for (var i = 0; i < flights.length; i++) {            
        totalNumOfPass += flights[i].listOfPass.length;
        flightsData +=  flights[i].getData();
        for (var j = 0; j < flights[i].listOfPass.length; j++) {
            flightsData += flights[i].listOfPass[j].getData();
        }
    }

    var totalNumBusiness = 0;
    var totalNumEconomy = 0;

    return 'Airport: ' + this.name + ', total passengers: ' + totalNumOfPass + '\n' + flightsData;  
};

(function() {
    function createFlight(relation, date) {
        var flight = new Flight(relation, date);
        return flight;   
    }

    function createPassenger(first, last, seat, category) {
        var person = new Person(first, last);
        var seat = new Seat(seat, category);
        var pass = new Passenger(person, seat);
        return pass;
    }



    var longFlight = createFlight('Belgrade - New York', 'Oct 25 2017');
    var shortFlight = createFlight('Barcelona - Belgrade', 'Nov 11 2017');

    var john = createPassenger("John", "Snow", 1, "b");
    var cersei = createPassenger("Cersei", "Lannister", 2, "b");
    var danny = createPassenger("Daenerys", "Targaryen", 14);
    var tyrion = createPassenger("Tyrion", "Lannister");

    longFlight.addPassenger(john);
    longFlight.addPassenger(cersei);
    shortFlight.addPassenger(danny);
    shortFlight.addPassenger(tyrion);

    var airport = new Airport();
    airport.addFlight(longFlight);
    airport.addFlight(shortFlight);

    console.log(airport.getData());
})();