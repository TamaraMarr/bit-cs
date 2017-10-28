var movies = [];

function createMovie () {
    //selectors
    var titleElement = document.getElementById("mTitle");
    var lengthElement = document.getElementById("mLength");
    var genreSelectElement = document.getElementById("genre-select");
    var genreOptionElement = genreSelectElement[genreSelectElement.selectedIndex];
    var movieListElement = document.getElementById("movie-list");
    var errorElement = document.getElementById("error");

    //values
    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;

    //error message
    if (!title || !length || (genre === 'none')) {
        errorElement.textContent = "Error";
        return;
    }

    errorElement.textContent = "";

    //creating new movie
    var movie = new Movie(title, length, genre);

    //adding it to the movies array
    movies.push(movie);

    //making the list in the html - my function
    movieListElement.innerHTML = getMovieListHTML(movies);

    //resetting values
    titleElement.value = "";
    lengthElement.value = "";
    genreSelectElement.selectedIndex = 0;
}

var moviesDropDown = document.getElementById('movies-programs-list');

function getMovieListHTML(moviesArray) {
    var movieListHTML = "<ul>";

    //making a list of movies in the div>ul element; making the dropdown list of movies; adds value attribute to the movie for easy identification
    for (var i = 0; i < moviesArray.length; i++) {
        var film = moviesArray[i];
        movieListHTML += "<li>" + film.getMovieInfo() + "</li>";
        var option = document.createElement('option');
        var content = document.createTextNode(film.title);
        option.setAttribute('value', i);
        option.appendChild(content);
    }
    
    moviesDropDown.appendChild(option);
    movieListHTML += "</ul>";
    return movieListHTML;
}

var selectedMovie = movies[0]
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
        option.setAttribute("value", i);
        var content = document.createTextNode(date);
        option.appendChild(content);
    }
    
    programsDropDown.appendChild(option);
    programListHTML += "</ul>";
    return programListHTML;
}

function formatDate(dateStr) {
    var date = new Date(dateStr.split("-").join(" "));
    var formattedDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    return formattedDate;
}

function addMovie() {
    var moviesDropDown = document.getElementById('movies-programs-list');
    var programsDropDown = document.getElementById('programs-movies-list');
    var movieIndex = moviesDropDown[moviesDropDown.selectedIndex].value;
    var programIndex = programsDropDown[programsDropDown.selectedIndex].value;
    var selMovie = movies[movieIndex];
    var selProgram = programs[programIndex];

    selProgram.moviesInProgram.push(selMovie.title);
    selProgram.numOfMovies = selProgram.moviesInProgram.length;
    
    var moviesInProgramList = "<ul>";
    moviesInProgramList += 'Current number of movies for ' + selProgram.date + ': ' + selProgram.numOfMovies;

    for(var i = 0; i < selProgram.moviesInProgram.length; i++) {
        moviesInProgramList += '<li>' + selProgram.moviesInProgram[i] + '</li>';
    }

    moviesInProgramList += "</ul>";

    document.getElementById('numOfMoviesInProgram').innerHTML = moviesInProgramList;
}

function previewFestData() {
    var previewData = '<p>';
    for(var i = 0; i < programs.length; i++) {
        previewData += programs[i].date + '<br>';
        for(var j = 0; j < programs[i].moviesInProgram.length; j++) {
            previewData += '&nbsp;&nbsp;&nbsp;' + programs[i].moviesInProgram[j] + '<br>';
        }
    }
    previewData += '</p>';
    
    document.getElementById('previewedFestData').innerHTML = previewData;
}

function createFestival() {
    var festival = new Festival(programs);
    console.log(festival);
}