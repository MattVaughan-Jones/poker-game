// Finds hands in each player
module.exports = {
  highCard,
  /*
  pair,
  twoPair,
  set,
  straight,
  flush,
  fullHouse,
  fourOfAKind
  straightFlush,
  royalFlush
  */
}

function highCard (players, communityCards, i){

  let returnHand = 1111;
  return returnHand
}

/*

function pair (playerCards, communityCards){

}

function twoPair (playerCards, communityCards){

}

function set (playerCards, communityCards){

}

function straight (playerCards, communityCards){

}

function flush (playerCards, communityCards){

}

function fullHouse (playerCards, communityCards){

}

function fourOfAKind (playerCards, communityCards){

}

function straightFlush (playerCards, communityCards){

}

function royalFlush (playerCards, communityCards){

}

//::::::::::from previous attempt at finding pairs:::::::::

/*
// count repetitions of each number in each player's hand, return as an object (countedNumbers)
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
*/
