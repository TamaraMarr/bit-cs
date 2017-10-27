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
}

Program.prototype.getProgramInfo = function() {
    var formattedDate = formatDate(this.date);
    var movies
    for(var i = 0; i < this.moviesInProgram.length; i++) {

    }

    return formattedDate;
}