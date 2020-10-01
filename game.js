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

let hands = require('./hands.js');

function addDeck(newDeck) {
  this.deck = newDeck;
}

//Create players
  //Defines Player class
class Player {
  constructor(name, chips, playerCards, bestHand){
    this.name = name;
    this.chips = chips;
    this.playerCards = playerCards;
    this.bestHand = bestHand
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
  { number: 10, suit: 'd' },
  { number: 10, suit: 'c' },
  { number: 10, suit: 'h' },
  { number: 10, suit: 'd' },
  { number: 6, suit: 'h' } ]
}


//find hands
function checkHands(numberOfPlayers) {
  for (i = 0 ; i < numberOfPlayers ; i++) {

    let duplicateNum = hands.findDuplicates(this.communityCards, this.players);
/*
    if (hands.royalFlush(this.players, this.communityCards, i)) {
      return `high Card ${highCard}`
    }
    elseif (hands.straightFlush(this.players, this.communityCards, i)) {
      return `high Card ${highCard}`
    }
*/
    if (hands.fourOfAKind(duplicateNum)) {
      this.players[i].bestHand = '4 of a kind: ' + hands.fourOfAKind(duplicateNum);
    }
/*
    elseif (hands.fullHouse(this.players, this.communityCards, i)) {
      return `high Card ${highCard}`
    }

    elseif (hands.flush(this.players, this.communityCards, i)) {
      return `high Card ${highCard}`
    }

    elseif (hands.straight(this.players, this.communityCards, i)) {
      return `high Card ${highCard}`
    }
*/
    else if (hands.set(duplicateNum)) {
      this.players[i].bestHand = 'Set of ' + hands.set(duplicateNum);
    }

    else if (hands.twoPair(duplicateNum)) {
      this.players[i].bestHand = '2 Pairs of ' + hands.twoPair(duplicateNum);
    }

    else if (hands.pair(duplicateNum)) {
      this.players[i].bestHand = 'Pair of ' + hands.pair(duplicateNum);
    }

    else if (hands.highCard(this.players, this.communityCards, i)) {
      this.players[i].bestHand = hands.highCard(this.players, this.communityCards, i);
    }

    else this.players[i].bestHand = "malfunction"

  }
}

/*
hands.highCard();
console.log(hands.isHighCard);

  //compare each players strongest hand














/*
*/
