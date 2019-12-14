$(document).ready(function () {

    // This is our API key
    var APIKey = "1d6d7d616cf0e8e67fe23fcb5edfbdb5";

    // Here we are building the URL we need to query the database
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchValue + "&units=imperial&appid=" + APIKey;
    var searchValue = $('#search-value').val()

    function currentWeather(event) {
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
})