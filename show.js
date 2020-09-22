module.exports = function(hands, communityCards, players){

const playHands = [];
const playHandsNumbers = [];
const playHandsSuits = [];

//concatenates community cards onto each player's hands: playHands
for (i = 0 ; i < players.length ; i++){
  playHands[i] = hands[i].concat(communityCards);
  playHands[i].shift();
}

//          look for pairs
// extract numbers from each player's 7 usable cards -> array of arrays of each hand
for (j = 0 ; j < playHands.length ; j++){
  playHandsNumbers[j] = [];
  for (k = 0 ; k < playHands[j].length ; k++){
    playHandsNumbers[j][k] = playHands[j][k].slice(0, -1);
  }
}
// check for pairs in each hands
let countedNumbers = [];
for (j = 0 ; j < playHandsNumbers.length ; j++){
  countedNumbers[j] = playHandsNumbers[j].reduce((allNumbers, number) => {
    if (number in allNumbers) {
      allNumbers[number]++
    }
    else {
      allNumbers[number] = 1
    }
    return allNumbers
  }, {})
}


/*
// extract suits from each player's 7 usable cards -> array of arrays of each hand
playHandsSuits[0] = playHands[0][0][playHands[0][0].length-1];
*/

// find pairs in each hands



//Look for pairs

return {
  playHands,
  playHandsNumbers,
  countedNumbers,
  communityCards};
}
