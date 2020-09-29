// Finds hands in each player
module.exports = {
  findDuplicates,
  allDuplicates: null,
  highCard,
  pair,
  twoPair,
  set,
  straight,
  flush,
  fullHouse,
  fourOfAKind,
  straightFlush,
  royalFlush
}

//creates an object which counts occurences of each number
function findDuplicates(communityCards, players){
  let communityDuplicates = communityCards.map((card) => {
    return {
      num: card.number,
      count: 1
    }
  })
  .reduce((accum , current) => {
    if (accum[current.num]){
      accum[current.num]+= 1
    }
    else {
      accum[current.num]= 1
    }
    return accum
  }, {})

  this.allDuplicates = players[i].playerCards.map((card) => {
    return {
      num: card.number,
      count: 1
    }
  })
  .reduce((accum , current) => {
    if (accum[current.num]){
      accum[current.num]+= 1
    }
    else {
      accum[current.num]= 1
    }
  return accum
  }, communityDuplicates)
  return this.allDuplicates
}

//determine the high card
function highCard (players, communityCards, i) {

  let returnHand1 = players[i].playerCards.reduce(function (accumulator, current){
    if (current.number > accumulator) {
      accumulator = current.number
    }
    return accumulator
  }, 0);

  let returnHand2 = communityCards.reduce(function (accumulator, current){
    if (current.number > accumulator) {
      accumulator = current.number
    }
    return accumulator
  }, returnHand1);

  return 'high Card ' + returnHand2
}

function pair (playerCards, communityCards, i){
  
}

function twoPair (playerCards, communityCards, i){

}

function set (playerCards, communityCards, i){

}

function straight (playerCards, communityCards, i){

}

function flush (playerCards, communityCards, i){

}

function fullHouse (playerCards, communityCards, i){

}

function fourOfAKind (playerCards, communityCards, i){

}

function straightFlush (playerCards, communityCards, i){

}

function royalFlush (playerCards, communityCards, i){

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
