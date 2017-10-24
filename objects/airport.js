'use strict';

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

    var airport = new Airport();

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

    airport.addFlight(longFlight);
    airport.addFlight(shortFlight);

    console.log(airport.getData());
})();

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
        return this.name + " " + this.surname;
    }
}

function Seat(number, category) {
    this.number = number || Math.floor(Math.random() * 90 + 10);
    this.category = (function() {
        if (category === 'b') {
            return 'b';
        } else if (category === 'e') {
            return 'e';
        } else {
            return 'e';
        }
    })();
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function() {
        return '\t\t' + this.seat.number + ', ' + this.seat.category.toUpperCase() + ', ' + this.person.getData() + '\n';
    }
}

function Flight(relation, date) {
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPass = [];

    this.getData = function() {
        var shortDepartureName = '';
        var shortArrivalName = '';
        var splitRelation = this.relation.split(' - ');
        var depart = splitRelation[0];
        var arrive = splitRelation[1];
        shortDepartureName = depart[0] + depart[depart.length - 1];
        shortArrivalName = arrive[0] + arrive[arrive.length - 1];
        var result = (shortDepartureName.toUpperCase() + ' - ' + shortArrivalName.toUpperCase());


        return '\t' + this.date + ', ' + result + '\n';
    }
    this.addPassenger = function (passenger) {
        this.listOfPass.push(passenger);
    }
}

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];

    this.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }

    this.getData = function() {
        var totalNumOfPass = 0;
        var flightsData = '';

        for (var i = 0; i < this.listOfFlights.length; i++) {            
            totalNumOfPass += this.listOfFlights[i].listOfPass.length;
            flightsData +=  this.listOfFlights[i].getData();
            for (var j = 0; j < this.listOfFlights[i].listOfPass.length; j++) {
                flightsData += this.listOfFlights[i].listOfPass[j].getData();
            }
        }
        return 'Airport: ' + this.name + ', total passengers: ' + totalNumOfPass + '\n' + flightsData;  
    }
}
