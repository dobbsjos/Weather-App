$(document).ready(function () {

    // This is our API key
    var APIKey = "1d6d7d616cf0e8e67fe23fcb5edfbdb5";

    // Here we are building the URL we need to query the database
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchValue + "&units=imperial&appid=" + APIKey;
    var searchValue = $('#search-value').value()
    // Here we run our AJAX call to the OpenWeatherMap API
    // $.ajax({
    //     url: weatherUrl,
    //     method: "GET"
    // })
    //     // We store all of the retrieved data inside of an object called "response"
    //     .then(function (response) {

    //         // Log the queryURL
    //         console.log(weatherUrl);

    //         // Log the resulting object
    //         console.log(response);
    //     })

    function currentWeather() {
        $.ajax({
            url: weatherUrl,
            method: 'GET',
        }).then(function (response) {
            console.log(weatherUrl)
            console.log(response)

        });
    }

    $('#search-button').on('click', function () {
        var searchValue = $('#search-value').value()

        currentWeather(searchValue);
    })

    // var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=orlando1d6d7d616cf0e8e67fe23fcb5edfbdb5"
    // var weatherApiKey = "1d6d7d616cf0e8e67fe23fcb5edfbdb5"

    // $.ajax({
    //     url: weatherUrl,
    //     method: 'GET'
    // }).then(function(response){
    //     console.log(url)
    //     console.log(response)
    // })


})