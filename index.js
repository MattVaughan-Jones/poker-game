const numberOfPlayers = 3;

let game = require('./game');
let deckCreator = require('./deck.js');
let playerCreator = require('./player.js');

let newDeck = deckCreator(); //Adds newDeck to the global namespace

game.addDeck(deckCreator()); //pushes newDeck to the game module

game.addPlayer('me', 'none', 1);
game.addPlayer('you', 'none', 0);

console.log(game.players);
/*
game.addPlayer(playerCreator.createPlayer());
game.addPlayer(playerCreator.createPlayer());

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
