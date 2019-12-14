$(document).ready(function () {

    // This is our API key


    // Here we are building the URL we need to query the database

    // var searchValue = $('#search-value').val()
    // var searchValue = document.getElementById("#searchValue")
    // console.log(searchValue);
    var APIKey = "1d6d7d616cf0e8e67fe23fcb5edfbdb5";
    
    $("#search-button").on("click", function (event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();
        var searchValue = $('#search-value').val();
        var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=" + APIKey;


        // Here we construct our URL
        // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

        $.ajax({
            url: weatherUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(weatherUrl)
        });

    })
})