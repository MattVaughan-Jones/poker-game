module.exports = {
  deck: [],
  players: [],
  communityCards: [],
  addDeck,
  addPlayer,
  newHand,
  dealPlayerCards,
  dealCommunityCards,
  checkHands,
};

/*
NOTES

- dealPlayerCards was made to deal specific cards to players[2]
- dealCommunityCards now deals specific cards by adding a "-1" to the stop condition of the for loop
- The allDuplicates creator is lazy code. Should create an array of objects of the
  form: {cardNumber: x , quantity: y}, so that cardNumber can be accessed as a number
-

*/

let hands = require('./hands.js');

function addDeck(newDeck) {
  this.deck = newDeck;
}

//Create players
  //Defines Player class
class Player {
  constructor(name, chips, playerCards, bestHand, allCards){
    this.name = name;
    this.chips = chips;
    this.playerCards = playerCards;
    this.bestHand = bestHand;
  }
}
  //Pushes a Player to the players array. Can be called in index to create players.
function addPlayer(name, chips, playerCards, bestHand) {
  this.players.push(new Player(name, chips, playerCards, bestHand));
}

//Deal cards
  //Initialises new hand: discards players cards,
function newHand(numberOfPlayers){
  for (i = 0 ; i < numberOfPlayers ; i++) {
    this.players[i].playerCards = [];
    this.players[i].bestHand = [];
    this.communityCards = [];
  }
}

  //pushes the card selected in index to player.playerCards and removes it from deck.
function dealPlayerCards(numberOfPlayers) {
  for (i = 0 ; i < numberOfPlayers ; i++) {
    for (j = 0 ; j < 2 ; j++){
      let deckIndex = Math.floor(Math.random()*this.deck.length);
      this.players[i].playerCards.push(this.deck[deckIndex]);
      this.deck.splice(deckIndex, 1);   //delete card from deck
    }
  }
  this.players[0].playerCards[0] = {number: 10, suit: 's'};
  this.players[0].playerCards[1] = {number: 3, suit: 'h'};

  this.players[1].playerCards[0] = {number: 2, suit: 'h'};
  this.players[1].playerCards[1] = {number: 10, suit: 'h'};

  this.players[2].playerCards[0] = {number: 1, suit: 'h'};
  this.players[2].playerCards[1] = {number: 1, suit: 'h'};
}

  //pushes card selected in index to communityCards

function dealCommunityCards(quantity){
  /*
  for (i = 0 ; i < quantity ; i++) {
    let deckIndex = Math.floor(Math.random()*this.deck.length);
    this.communityCards.push(this.deck[deckIndex]);
    this.deck.splice(deckIndex, 1);   //delete card from deck
  }
  */
  this.communityCards = [
  { number: 10, suit: 'h' },
  { number: 10, suit: 'c' },
  { number: 1, suit: 'h' },
  { number: 2, suit: 'd' },
  { number: 2, suit: 'h' } ]
}


//find hands
function checkHands(numberOfPlayers) {
  for (i = 0 ; i < numberOfPlayers ; i++) {

    let allCards = hands.allCards(this.communityCards, this.players, i);
    
    let duplicateNum = hands.findDuplicateNum(allCards, this.communityCards, this.players, i);

    let duplicateSuit = hands.findDuplicateSuit(allCards, this.communityCards, this.players, i);

/*
    if (hands.royalFlush(this.players, this.communityCards, i)) {
      return `high Card ${highCard}`
    }
    elseif (hands.straightFlush(this.players, this.communityCards, i)) {
      return `high Card ${highCard}`
    }

    if (hands.fourOfAKind(duplicateNum)) {
      this.players[i].bestHand = '4 of a kind: ' + hands.fourOfAKind(duplicateNum);
    }

    if (hands.fullHouse(duplicateNum)) {
      this.players[i].bestHand = hands.fullHouse(duplicateNum);
    }
*/
    if (hands.flush(duplicateSuit, allCards, i)) {
      this.players[i].bestHand = hands.flush(duplicateSuit, allCards, i);
    }
/*
    elseif (hands.straight(this.players, this.communityCards, i)) {
      return `high Card ${highCard}`
    }
*/
    else if (hands.set(duplicateNum)) {
      this.players[i].bestHand = 'Set of ' + hands.set(duplicateNum);
    }

    else if (hands.twoPair(duplicateNum)) {
      this.players[i].bestHand = 'two pairs: ' + hands.twoPair(duplicateNum);
    }

    else if (hands.pair(duplicateNum)) {
      this.players[i].bestHand = 'Pair: ' + hands.pair(duplicateNum);
    }

    else if (hands.highCard(this.players, this.communityCards, i)) {
      this.players[i].bestHand = hands.highCard(this.players, this.communityCards, i);
    }

    else this.players[i].bestHand = "malfunction"

  console.log(this.players[i].bestHand);
  }
}
/*



  //compare each players strongest hand














/*
*/
