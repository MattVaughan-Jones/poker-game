//test file

//Can use object.entries to create this
let origObj = {
  '1': 1,
  '2': 1,
  '3': 2,
  '4': 3,
  '5': 1
}

let obj1 = [
{number: 1, quantity: 1},
{number: 2, quantity: 2},
{number: 3, quantity: 1},
{number: 4, quantity: 3},
];

let commCards = [ { number: 11, suit: 'h' },
  { number: 8, suit: 's' },
  { number: 5, suit: 'h' },
  { number: 8, suit: 'd' },
  { number: 12, suit: 'd' }
];


function getPairs(object) {
  let pairs = Object.keys(object).filter(key => object[key] === 2);
  if (pairs.length === 1) {
    theHand = pairs[0]
    return theHand
  }
}
getPairs(origObj)
console.log(theHand);

/*
2 ways to do this:

1 - identify first num, check if those below it are the same
  - identify 2nd num, check if those below are the same. etc...
    if yes, break, 1 pair. Would rely on being triggered by no higher hands (eg set)
    wouldn't work for a Set

2 - sort the hand into quantities of each number
    check for quantity of 2
    Could repurpose this code for 2pair, set, full, 4OAK
*/



//Trying to figure out how to identify pairs in the duplications array of objects.
//Note, the duplications array used in 'hands' is not an array, rather a single object.
//Will need to change this
let thePair = undefined;

let pairOf = obj1.map((element) => {
  if (element.quantity === 2) {
    thePair = element.number;
    return thePair
  }
})
console.log(thePair);
