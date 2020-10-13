// Finds hands in each player
module.exports = {
  findDuplicateNum,
  findDuplicateSuit,
  allCards,
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

//creates a CLONE object which lists all playerCards + communityCards
function allCards(communityCards, players, i) {
  let allCards = communityCards.map((element) => {
    return Object.assign({}, element)
  })

  allCards.push(...players[i].playerCards.map((element) => {
    return Object.assign({}, element)
  }));

  allCards.sort((a, b) => {
    return a.number - b.number;
  })

  return allCards
}

//creates an object which counts occurences of each number
function findDuplicateNum(allCards, communityCards, players, i){

  let countedNumbers = [];

  let numberSummary = allCards.map((element) => {
    return Object.assign({}, element)
  })

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

//creates an object which counts occurences of each suit
function findDuplicateSuit(allCards, communityCards, players, i) {
  let countedSuits = [];

  let suitSummary = allCards.map((element) => {
    return Object.assign({}, element)
  })

  suitSummary.map((element) => {
    element.count = 1;
    delete element.number;
  })

  suitSummary.reduce((accum, curr) => {
    countedSuits = [];
    countedSuits = countedSuits.concat(accum);
    if (countedSuits.find((x) => x.suit === curr.suit) === undefined) {
      countedSuits.push(curr);
    }
    else {
      //find index in countedSuits where curr.number = countedSuits[i].number, increment count
      for (i2 = 0 ; i2 < countedSuits.length ; i2++) {
        if (countedSuits[i2].suit === curr.suit) {
          countedSuits[i2].count += 1;
        }
      }
    }
    return countedSuits;
  })
  return countedSuits;
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

function pair (duplicateNum) {
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

function flush (duplicateSuit, allCards, i){
  let flush = {suit: null, highestCard: null};
  duplicateSuit.map((elementFlush) => {
    if (elementFlush.count > 4) {
      flush.suit = elementFlush.suit;
      flush.highestCard = allCards.reduce((accum, curr) => {
        if (curr.suit === flush.suit && curr.number > accum) {
          return curr.number;
        }
        else {return accum}
      }, 0)

    }
  })
  if (flush.suit && flush.highestCard) {
    return flush
  }
  else {
    return undefined
  }
}

function fullHouse (duplicateNum) {
  //find set
  let fullHouse = {set: null , pair: null};
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

  if (set.length > 0) {
    fullHouse.set = Math.max(...set);
  }

  if (set.length === 2) {
    fullHouse.pair = Math.min(...set);
  }

  else if (pair.length > 0) {
    fullHouse.pair = Math.max(...pair);
  }

  if (typeof(fullHouse.set) === 'number' && typeof(fullHouse.pair) === 'number') {
    return fullHouse
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




/*
*/
