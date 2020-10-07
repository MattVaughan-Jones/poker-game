// Finds hands in each player
module.exports = {
  countedNumbers: null,
  findDuplicateNum,
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

function findDuplicateNum(communityCards, players){
  let numberSummary = communityCards.map((element) => {
    return Object.assign({}, element)
  })

  let countedNumbers = [];

  numberSummary.push(...players[i].playerCards.map((element) => {
    return Object.assign({}, element)
  }));

  numberSummary.map((element) => {
    element.count = 1;
    delete element.suit;
  })

  numberSummary.reduce((accum, curr) => {
    countedNumbers = [];
    countedNumbers = countedNumbers.concat(accum);
    if (countedNumbers.find((x) => x.number === curr.number) === undefined) {
      countedNumbers.push(curr);
    }
    else {
      //find index in countedNumbers where curr.number = countedNumbers[i].number, increment count
      for (i1 = 0 ; i1 < countedNumbers.length ; i1++) {
        if (countedNumbers[i1].number === curr.number) {
          countedNumbers[i1].count += 1;
        }
      }
    }
    return countedNumbers;
  })
  return countedNumbers;
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

function pair (duplicateNum){
  let pair = [];
  duplicateNum.map((element) => {
    if (element.count === 2) {
      pair.push(element.number);
    }
  })
  if (pair.length === 1) {
    return pair
  }
  else {
    return undefined
  }
}


//what to do if 3 pairs
function twoPair (duplicateNum){
  let pairs = [];
  duplicateNum.map((element) => {
    if (element.count === 2) {
      pairs.push(element.number);
    }
  })
  if (pairs.length === 3) {
    pairs.splice(pairs.findIndex(number => number === Math.min(...pairs)), 1);
  }
  if (pairs.length === 2) {
    return pairs
  }
  else {
    return undefined
  }
}

function set (duplicateNum){
  let set = [];
  duplicateNum.map((element) => {
    if (element.count === 3) {
      set.push(element.number);
    }
  })
  if (set.length === 2) {
    set.splice(set.findIndex(number => number === Math.min(...set)), 1);
  }
  if (set.length === 1) {
    return set
  }
  else {
    return undefined
  }
}

function straight (playerCards, communityCards, i){

}

function flush (playerCards, communityCards, i){

}

/*
Could do this 2 ways:
- analyse each way to get a full (normal, from 2 sets, from set + to pairs)
- find highest set and highest pair available
  might be hard to find the pair in 2 sets
*/
function fullHouse (duplicateNum) {
  //find set
  let fullHouse = [];
  let set = [];
  duplicateNum.map((elementSet) => {
    if (elementSet.count === 3) {
      set.push(elementSet.number);
    }
  })
  //find pair
  let pair = []
  duplicateNum.map((elementPair) => {
    if (elementPair.count === 2) {
      pair.push(elementPair.number);
    }
  })

  if (set.length === 1 && pair.length === 1) {
    console.log('regular full house');
  }

  else if (set.length === 2) {
    console.log('full house from 2 sets');
  }

  else if (set.length === 1 && pair.length === 2) {
    console.log('full house from set and 2 pairs');
  }

  else {
    return undefined
  }
}

function fourOfAKind (duplicateNum){
  let fourOfAKind = []
  duplicateNum.map((element) => {
    if (element.count === 4) {
      fourOfAKind.push(element.number);
    }
  })
  if (fourOfAKind.length === 1) {
    return fourOfAKind
  }
  else {
    return undefined
  }
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
