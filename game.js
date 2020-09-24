module.exports = {
  deck: [],
  players: [],
  communityCards: [],
  newHand,
  addDeck,
  addPlayer,
  dealPlayerCards,
  dealCommunityCards
};

function addDeck(newDeck) {
  this.deck = newDeck;
}

//Create players
  //Defines Player class
class Player {
  constructor(name, playerCards, chips){
    this.name = name;
    this.playerCards = playerCards;
    this.chips = chips;
  }
}
  //Pushes a Player to the players array. Can be called in index to create players.
function addPlayer(name, cards, chips) {
  this.players.push(new Player(name, cards, chips));
}

//Initialises new hand: discards players cards,
function newHand(numberOfPlayers){
  for (i = 0 ; i < numberOfPlayers ; i++) {
    this.players[i].playerCards = []
  }
}

//pushes the card selected in index to player.playerCards and removes it from deck.
function dealPlayerCards(whichPlayer, deckIndex) {
  this.players[whichPlayer].playerCards.push(this.deck[deckIndex]);
  this.deck.splice(deckIndex, 1);   //delete card from deck
}

function dealCommunityCards(deckIndex){
  this.communityCards.push(this.deck[deckIndex]);
  this.deck.splice(deckIndex, 1);   //delete card from deck
}
/*
*/
