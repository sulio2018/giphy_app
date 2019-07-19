var movies = ["The Godfather", "Goodfellas", "Casino", "A Bronx Tale"];

function displayMovieGiphy() {

    var flick = $(this).attr("data-movie"); ///bug
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Ltj14oh2eAFsFaQ1sUMoe5XF8yNuGCqB&q=" +
        flick + "&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
    .then(function(response) {
        console.log(queryURL);

      $(".giphy-view").text(JSON.stringify(response));
    });
  }

function renderButtons() {

    $(".buttons-view").empty();

    for (var i = 0; i < movies.length; i++) {

        var a = $("<button>");

        a.addClass("movie btn btn-info");

        a.attr("data-name", movies[i]);

        a.text(movies[i]);

        $(".buttons-view").append(a);
    }

}

$("#add-movie").on("click", function(event) {

    event.preventDefault();

    var movie = $("#movie-input").val().trim();

    movies.push(movie);

    renderButtons();
    
  });

  renderButtons();