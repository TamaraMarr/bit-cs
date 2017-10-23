'use strict';

(function () {
    var genres = [
        new Genre("action", 89), 
        new Genre("horror"), 
        new Genre("drama", 35)
    ];

    genres[1].averageRating = 57;

    var m = new Movie("Moulen Rouge", new Genre("love film"), 125);
    var movies = [
        new Movie("Moulen Rouge", genres[2], 125),
        new Movie("Melancholy", genres[2], 101),
        new Movie("Eternal Sunshine", genres[2], 95),        
    ]

    var prog = new Program('Aug 8, 1917');
    for(var i = 0; i < movies.length; i++) {
        if(movies[i].title[0] === 'M') {
            prog.addMovie(movies[i]);
        }
    }

    var a = prog.programInfo();
    console.log(a);

}) ();

function Genre(name, averageRating) {
    this.name = name;
    this.averageRating = averageRating;

    this.genreID = function () {
        var output = this.name[0] + this.name[this.name.length - 1];
        return output.toUpperCase();
    }
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.movieInfo = function() {
        return this.title + ", " + this.length + ", " + this.genre.genreID();
    }
}

function Program(date) {
    this.date = date;
    this.movies = [];
    this.totalNumOfMovies = 0;

    this.addMovie = function (movie) {
        this.movies.push(movie);
        this.totalNumOfMovies++;    
    }

    this.programInfo = function () {
        var lengthOfAllMovies = 0;

        for (var i = 0; i < this.movies.length; i++) {
            lengthOfAllMovies += this.movies[i].length;
        }
        
        var s = "";

        for (var i = 0; i < this.movies.length; i++) {
            s = s + "\t" + this.movies[i].movieInfo() + "\n";
        }

        return this.date + ", " + lengthOfAllMovies + "\n" + s;
    }
}

function Festival(name) {
    this.name = name;
    this.programs = [];
    this.numOfMovies = 0;
}