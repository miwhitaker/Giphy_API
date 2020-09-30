var APIkey = '8xgt0YKOwVYA8sYEiPaFKWlKr9p6XeLk';


$('#button1').click(function() {
    var inputval = $('.text1').val();
    var fullUrl = 'https://api.giphy.com/v1/gifs/search?api_key=8xgt0YKOwVYA8sYEiPaFKWlKr9p6XeLk&q=' + inputval + '&limit=20&offset=0&rating=g&lang=en'
    
    $.get(fullUrl).done(function(response) {
    console.log(response)
    });
});




