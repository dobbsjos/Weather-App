$(document).ready(function () {

    // This is our API key
    var APIKey = "1d6d7d616cf0e8e67fe23fcb5edfbdb5";
    // this button makes the api call
    $("#search-button").on("click", function (event) {
        // event.preventDefault() can be used to prevent an event's default behavior. Not really sure I need this.
        event.preventDefault();

        // this takes in the city name for the search
        var searchValue = $('#search-value').val();

        // this is the url used to make the request
        var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&units=imperial&appid=" + APIKey;

        $.ajax({
            url: weatherUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(weatherUrl)
            console.log(response.name)
            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            $(".temp").text("Temperature " + response.main.temp + " (F)");
            $(".humid").text("Humidity: " + response.main.humidity);
            $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $(".uv").text("UV Index: " + response.main.)
        });

    })
})