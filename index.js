

var game = require('./game');
let deckCreator = require('./deck.js');
let playerCreator = require('./player.js');

let deck = deckCreator();

game.addDeck(deck);

game.addPlayer(playerCreator.createPlayer());
game.addPlayer(playerCreator.createPlayer());

game.dealPlayerCards();

game.playRound();

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
