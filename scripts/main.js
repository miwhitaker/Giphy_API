var APIkey = '8xgt0YKOwVYA8sYEiPaFKWlKr9p6XeLk';
var maxlength = '3';

$('#button1').click(function() {
    var inputval = $('.text1').val();
    var fullUrl = `https://api.giphy.com/v1/gifs/search?api_key=8xgt0YKOwVYA8sYEiPaFKWlKr9p6XeLk&q=${inputval}&limit=${maxlength}&offset=0&rating=g&lang=en`;

    $.get(fullUrl).done(function(response) {
        $('.imgcontainer').empty();
        var gifs = response.data

        for (var i = 0; i < maxlength; i = i + 1) {
            var newEL = `<img src="${gifs[i].images.fixed_height.url}" alt="${gifs[i].title}" />`;
            $('.imgcontainer').append(newEL);
            console.log(gifs)
        }

    
        })
    });
