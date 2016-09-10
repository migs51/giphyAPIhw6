    /*$('form').on('click', function() {
       animal = $(this).data('animal-input');
        $('#animalButtons').html($('<button>'animal-input'</button>'))


    });

  $('#animalButtons').append($('<button>'));*/

  $('button').on('click', function() {
        var animal = $(this).data('animal');
      
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(animal);
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {

            	console.log(queryURL);

                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                	var animalDiv = $('<div>');

                    var p = $('<p>').text("Rating: " + results[i].rating);

                    var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);

                    animalDiv.append(p);
                    animalDiv.append(animalImage);

                    $('#animals').prepend(animalDiv);

                              }

            });
    });