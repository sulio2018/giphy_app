$(document).ready(function () {

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

    })

    renderButtons();

    function displayMovieGiphy(m) {

        var m = $(this).attr("data-movie");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + m + "&api_key=LsSgQmv1PwrV51G47XGQf1d0SseSCRA0&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(queryURL);
                console.log(response);

                var results = response.data;

                for (var i = 0; i < response.length; i++) {

                    var giphyDiv = ("<div>");

                    var rating = results[i].rating;

                    var p = ("<p>").text("Rating: " + rating);

                    var movieImage = ("<img class= 'gif'>");
                    movieImage.attr("src", results[i].images.original_still.url);
                    movieImage.attr("data-still", results[i].images.original_still.url);
                    movieImage.attr("data-animate", results[i].images.original.url);
                    movieImage.attr("data-state", "still");

                    giphyDiv.append(p);
                    giphyDiv.append(movieImage);


                    $(".giphy-view").append(giphyDiv);
                }
                

                $('.gif').on('click', function () {

                    var state = $(this).attr('data-state');
                    console.log(this);

                    if (state == 'still') {

                        $(this).attr('src', $(this).data('animate'));

                        $(this).attr('data-state', 'animate');

                    } else {

                        $(this).attr('src', $(this).data('still'));

                        $(this).attr('data-state', 'still');
                    }
                });
            });

        $("#movie-input").val("");
        return false;

    };





    $(document).on("click", ".movie", displayMovieGiphy);

})
