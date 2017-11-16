$( document ).ready(function() {
    var cards = []
    var randomNumbers = []
    var counter = 0

    $('.card').each( function(i,e) {
        /* you can use e.id instead of $(e).attr('id') */
        cards.push($(e).attr('id'));
    });
   // console.log('Cards: ' + cards)
    while (counter < cards.length / 2) {
       // console.log("Counter is : " + counter)
        randomNumbers[counter] = Math.floor(Math.random() * 30) + 1
       // console.log('Random Number is: ' + randomNumbers[counter])
        counter++
    }

});