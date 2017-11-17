/*******************
    VARIABLES
*******************/
var gameGrid = $("#game-grid")
var displayWin = $('#win')
var displayMatch = $('#match')
var randomNumberArray = []
var guess1 = 0
var guess2 = 0
var clicks = 0
var cards = $('.card')
var card = document.createElement('div')
var count = 0
for (count = 0, count < cards.length, count++) {
  cards[count].addEventListener()
}


/*******************
    FUNCTIONS
*******************/

// Generate a random number
function genRandomNumber() {
  randomNumber = Math.floor((Math.random() * cards.length) + 0)
  return randomNumber
}


// Create the game play grid (remove static HTML, it's just a placeholder right now)
function createGameGrid() {
  // each card do
  // var card = document.createElement('div')
  // card.className = 'col s3 card center pointer'
  // card.dataset.value = image
  // var icon = document.createElement('i')
  // icon.className = 'icon'
  // icon.innerHTML = image
  // card.appendChild
}


function setDataAttributes() {
  count = 0
  // cards.length / 2 gives us half the cards. Each card
  // needs a pair, so this will give that amount of pairs
  while (count < cards.length / 2) {
    
    // Get a random number by valling the genRandomNumber function
    var randomNumber = genRandomNumber()
    randomNumberArray[count] =  randomNumber 
    console.log("Random number at " + count + " is " + randomNumberArray[count])
    
    //
    var card1 = cards[count]
    var card2 = cards[randomNumber]
    console.log("Card 1 is " + card1.id)
    console.log("Card 2 is " + card.id)
    
    // Check for is randomNumber is already on a card. If it is, get another ranodm number
    // If it's not, set a data-attribute to two HTML elements with the 'cards' class
    if(jQuery.inArray(randomNumber, randomNumberArray)==0) {
      console.log("Number " + randomNumber + " is already used. Trying again.")
      randomNumber[count] = genRandomNumber()
    } else {
      // Apply randomNumber to the a dataset on card1 and card2
    }
    count++
  }
}

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
    console.log('Card has been clicked!')
    clicks++
  })
}

function newGame() {
  console.log("New game started.")
  guess1 = 0
  guess2 = 0
  createGameGrid()
  setDataAttributes();
}




/*****************************
 WHEN DOCUMENT IS READY
 ******************************/
$(document).ready(function() {

  newGame() // Start the game
});