const numberOfPlayers = 3;

let game = require('./game');
let deckCreator = require('./deck.js');
let playerCreator = require('./player.js');

let newDeck = deckCreator(); //Adds newDeck to the global namespace

game.addDeck(deckCreator()); //pushes newDeck to the game module

for (i = 0 ; i < numberOfPlayers ; i++) {
  game.addPlayer();
}

//Initialise a new hand by discarding each players cards
game.newHand(numberOfPlayers);

//Assign cards to each player
for (whichPlayer = 0 ; whichPlayer < numberOfPlayers ; whichPlayer++){
  for (j = 0 ; j < 2 ; j++){
    let cardIndex = Math.floor(Math.random()*game.deck.length);
    game.dealPlayerCards(whichPlayer, cardIndex);
  }
}


/*
game.dealPlayerCards();

game.playRound();
*/

// //Define the number of players
// const numberOfPlayers = 3;
//
// //Create a deck
// let deckCreator = require('./Deck.js');
// let deck = deckCreator();
//
// let playerManager = require('./players.js');
// playerManager.addPlayer();
//
// console.log(playerManager.players);
//
// let dealer = require('./dealer.js');
// let deal = dealer(deck, players);
// // returns hands, activeDeck, communityCards
//
// let showdown = require('./show.js');
// let winner = showdown(deal.hands, deal.communityCards, players);
//
// console.log(winner);
