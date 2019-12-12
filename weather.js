$(document).read(function () {

    const weatherUrl = 
    const weatherApiKey =


        function currentWeather() {
            $.ajax({
                url: weatherUrl + searchValue + weatherApiKey + "c&units=imperial",
                type: 'GET',
            }).then(function (response) {
                console.log(url)
                console.log(response)

                $('.today').html('<h1>' + response.name + 'Weather Details</h1>' + "Temp")
            })
        }

    $('#search-button').on('click', function () {
        var searchValue = $('#search-value').val()

        currentWeather(searchValue);
    })
})