// Card dealer

module.exports = function (deck, players){
  const hands = [];
  const activeDeck = deck;
  const communityCards = [];
  //Sets up a player array for each player to which cards will be assigned
  for (i = 0 ; i < players.length ; i++){
    let playerCards = [players[i]];
    // assigns two cards to player i
    for (j = 1 ; j <= 2 ; j++){
      let cardNumber = Math.floor(Math.random() * activeDeck.length);
      playerCards.push(activeDeck[cardNumber]);
      //removes the dealt card from the active deck
      activeDeck.splice(cardNumber,1);
    }
    // puts the created array of player + 2 cards into the hands array
    hands.push(playerCards);
  }
  for (k = 1 ; k < 6 ; k++){
    let cardNumber = Math.floor(Math.random() * activeDeck.length);
    communityCards.push(activeDeck[cardNumber]);
    activeDeck.splice(cardNumber,1);
  }

  return {
    hands,
    activeDeck,
    communityCards,
  }
}
