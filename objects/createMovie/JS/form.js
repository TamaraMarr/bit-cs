var movies = [];

function createMovie () {
    var titleElement = document.getElementById("mTitle");
    var lengthElement = document.getElementById("mLength");
    var genreSelectElement = document.getElementById("genre-select");
    var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];
    var movieListElement = document.getElementById("movie-list");
    var errorElement = document.getElementById("error");

    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;

    if (!title || !length || (genre === 'none')) {
        errorElement.textContent = "Error";
        return;
    }

    errorElement.textContent = "";

    var movie = new Movie(title, length, genre);

    movies.push(movie);

    movieListElement.innerHTML = getMovieListHTML(movies);

    titleElement.value = "";
    lengthElement.value = "";
    genreSelectElement.selectedIndex = 0;
}

var moviesDropDown = document.getElementById('movies-programs-list');

function getMovieListHTML(moviesArray) {
    var movieListHTML = "<ul>";
    
    //making a list of movies in the div>ul element; making the dropdown list of movies;
    for (var i = 0; i < moviesArray.length; i++) {
        var film = moviesArray[i];
        movieListHTML += "<li>" + film.getMovieInfo() + "</li>";

        var option = document.createElement('option');
        var content = document.createTextNode(film.title);
        option.appendChild(content);
        moviesDropDown.appendChild(option);
    }
    movieListHTML += "</ul>";
    return movieListHTML;
}

var programs = [];

function createProgram() {
    var programDateElement = document.getElementById('pdate');
    var programDate = programDateElement.value;
    var formattedDate = formatDate(programDate);
    var errorElement = document.getElementById("date-error");
    var programListElement = document.getElementById("program-list");

    //filtering out invalid inputs
    if (!programDate) {
        errorElement.textContent = "Error";
        return;
    }

    errorElement.textContent = "";

    //creating new program with formatted date
    var program = new Program(formattedDate);

    //adding program to the list
    programs.push(program);

    //reset date value
    programDate = "";

    //input list into the page
    programListElement.innerHTML = getProgramListHTML(programs, formattedDate);
}

var programsDropDown = document.getElementById('programs-movies-list');

function getProgramListHTML(programsArray, date) {
    var programListHTML = "<ul>";

    for (var i = 0; i < programsArray.length; i++) {
        var program = programsArray[i];
        programListHTML += "<li>" + program.date + "</li>";

        var option = document.createElement('option');
        var content = document.createTextNode(date);
        option.appendChild(content);
        programsDropDown.appendChild(option);
    }

    programListHTML += "</ul>";
    return programListHTML;
}

function formatDate(dateStr) {
    var date = new Date(dateStr.split("-").join(" "));
    var formattedDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    return formattedDate;
}
