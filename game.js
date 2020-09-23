module.exports = {
  deck: [],
  deal: [],
  players: [],
  addDeck,
  addPlayer
};

function addDeck(newDeck) {
  this.deck = newDeck;
}
          //Function creates a Player in the players array
class Player {
  constructor(name, cards, chips){
    this.name = name;
    this.cards = cards;
    this.chips = chips;
  }
}
function addPlayer(name, cards, chips) {
  this.players.push(new Player(name, cards, chips));
}
/*
function dealPlayerCards() {
  // for each player

      // pick 2 cards,
      // delete them from the deck
      // push them to the player.hand
}

function drawCommunityCard() {

}
*/
