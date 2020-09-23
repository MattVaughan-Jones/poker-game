module.exports = {
  deck: [],
  players: [],
  newHand,
  addDeck,
  addPlayer,
  dealPlayerCards,
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

//discards each players cards
function newHand(numberOfPlayers){
  for (i = 0 ; i < numberOfPlayers ; i++) {
    this.players[i].playerCards = []
  }
}

//pushes the card selected in index to player.playerCards and removes it from deck.
function dealPlayerCards(whichPlayer, cardIndex) {
  this.players[whichPlayer].playerCards.push(this.deck[cardIndex]);
  this.deck.splice(cardIndex, 1);   //delete card from deck

}
/*
*/
