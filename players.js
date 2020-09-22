var players = [];

// Create Players
module.exports = {
  addPlayer,
  players: players
}


function addPlayer() {
  var player = {
    hand: null
  };

  players.push(player);
}


// module.exports = function (numberOfPlayers){
//   const players = [];
//   for (i = 1 ; i <= numberOfPlayers ; i++){
//     players.push('Player ' + i);
//   }
//   return players;
// }

/*
// Using classes to define Players

class Players{
  constructor(player, startChips, hand){
    this._chips = startChips;
    this._name = player;
    this._hand = hand;
  }
  get chips(){
    return this._chips
  }
  get name(){
    return this._name
  }
  get hand(){
    return this._hand
  }
  incrementChips(){
    this._chips + winnings - totalBet
  }
}
*/
