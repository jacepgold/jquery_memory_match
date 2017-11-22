/*******************
    VARIABLES
*******************/
$gameGrid = $("#game-grid")
$displayWin = $('#win')
$displayMatch = $('#match')
$randomNumberArray = []
$guess1 = 0
$guess2 = 0
$clicks = 0
$cards = $('.card') // THIS IS A JQUERY OBJECT
$card = document.createElement('div')
$count = 0

$.each($cards, function (i) {
  console.log('i ' + $cards[i])
});

/*******************
    FUNCTIONS
*******************/

// Generate a random number
function genRandomNumber() {
  var randomNumber = Math.floor((Math.random() * $cards.length) + 0)
  $randomNumberArray.push($randomNumber)
}


function setDataAttributes() {
  $count = 0
  while ($count < $cards.length) {
  
    $card1 = $($cards[$count])
    $card2 = $($cards[$randomNumber])
    
    $card1.data('count', $randomNumber)
    $card2.data('count', $randomNumber)
      //console.log('Card ' + $card1.attr('id') + ' & ' + $card2.attr('id') + ' data-count: ' + $card1.data('count'))
    }

    $count++
} // End while loop

function checkForMatch() {
  if (guess1 === guess2) {
    console.log('Match has been made!')
    console.log('Found ' + guess1)
  } else {
    console.log('No match')
    console.log('Guess 1 - ' + guess1)
    console.log('Guess 2 - ' + guess2)
  }
}


function theGame() {
  $(cards).on('click', '.card', function() {
    var card = $(this)
    clicks++
  })
}

function newGame() {
  console.log("New game started.")
  guess1 = 0
  guess2 = 0
  setDataAttributes();
}

/*****************************
 WHEN DOCUMENT IS READY
 ******************************/
$(document).ready(function() {

  newGame() // Start the game
});
