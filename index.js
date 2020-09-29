const numberOfPlayers = 3;

let game = require('./game');
let deckCreator = require('./deck.js');
let hands = require('./hands.js');

let newDeck = deckCreator(); //Adds newDeck to the global namespace

game.addDeck(deckCreator()); //pushes newDeck to the game module

for (i = 0 ; i < numberOfPlayers ; i++) {
  game.addPlayer();
}

//Initialise a new hand by discarding players' cards and community cards
game.newHand(numberOfPlayers);

//Assign cards to each player
game.dealPlayerCards(numberOfPlayers);

//deal community cards
game.dealCommunityCards(3); //flop
game.dealCommunityCards(1); //turn
game.dealCommunityCards(1); //river


game.checkHands(numberOfPlayers);
console.log(game.players[1].playerCards);
console.log(game.communityCards);
console.log(game.players[1].bestHand);
console.log(game.players[1]);










/*
*/
