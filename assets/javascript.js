var movies = ["The Godfather", "Goodfellas", "Casino", "A Bronx Tale"];


function renderButtons() {

    $(".buttons-view").empty();

    for (var i = 0; i < movies.length; i++) {

        var a = $("<button>");

        a.addClass("movie btn btn-info");

        a.attr("data-movie", movies[i]);

        a.text(movies[i]);

        $(".buttons-view").append(a);
    }

}

$("#add-movie").on("click", function (event) {

    event.preventDefault();

    var movie = $("#movie-input").val().trim();

    movies.push(movie);

    renderButtons();

    displayMovieGiphy(movie)

})

renderButtons();

function displayMovieGiphy(m) {

    var movie = $(this).attr("data-movie");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + m + "&api_key=LsSgQmv1PwrV51G47XGQf1d0SseSCRA0&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            

        });

        
}


