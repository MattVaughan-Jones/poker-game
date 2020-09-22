//Define the number of players
const numberOfPlayers = 3;
require('dotenv')
//Create a deck
let deckCreator = require('./Deck.js');
let deck = deckCreator();

let playerManager = require('./player.js');
playerManager.addPLayer();

console.log(playerManager.players);

let dealer = require('./dealer.js');
let deal = dealer(deck, players);
// returns hands, activeDeck, communityCards

let showdown = require('./show.js');
let winner = showdown(deal.hands, deal.communityCards, players);

console.log(winner);
