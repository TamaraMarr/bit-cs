'strict code';

(function () {
    function createMovie (mTitle, mLength, mGenre) {
        var genre = new Genre(mGenre);
        var movie = new Movie(mTitle, genre, mLength);
        return movie;
    }

    var LOTR = createMovie ("The Lord of the Rings", 125, "epic fantasy");
    var MR = createMovie ("Moulen Rouge", 97, "musical drama");
    var prog = new Program(new Date());
    prog.addMovie(LOTR);
    prog.addMovie(MR);
    console.log(prog.getData());
}) ();

function Genre (name) {
    this.name = name;

    this.getData = function () {
        var output = this.name[0] + this.name[this.name.length - 1];
        return output.toUpperCase();
    }
}

function Movie (title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function () {
        return this.title + ", " + this.length + ", " + this.genre.getData();
    }
}

function Program (date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumOfMovies = 0;
    this.totalLengthOfMovies = 0;

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.totalNumOfMovies++;
        this.totalLengthOfMovies += movie.length;
    }
    this.getData = function () {
        var output = '';
        output += "Date :" + this.date.getDate() + ", Program length: " + this.totalLength + "\n";
        
        for (var index = 0; index < this.listOfMovies.length; index++) {
            var movie = this.listOfMovies[index];
            output += "\t" + movie.getData() + "\n";
        }
        
        return output;
    };

}

function Festival (name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numOfMovies = 0;

    this.getData = function () {
        return Festival.name + Festival.numOfMovies + Festival.listOfPrograms;
    }
}