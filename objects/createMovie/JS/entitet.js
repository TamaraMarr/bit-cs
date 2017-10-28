function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getMovieInfo = function () {
    return this.title + ", " + this.length + ", " + this.genre;
};

function Program(date) {
    this.date = date;
    this.moviesInProgram = [];
    this.numOfMovies = 0;
}

Program.prototype.getProgramInfo = function() {
    return this.date + ' ' + this.moviesInProgram;
}

function Festival(programs) {
    this.name = 'Super Duper Fun Fest';
    this.programs = [];
}