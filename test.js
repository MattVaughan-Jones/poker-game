//test file


let obj1 = [
{number: 1, quantity: 1},
{number: 2, quantity: 2},
{number: 3, quantity: 1},
{number: 4, quantity: 3},
];

/*
2 ways to do this:

1 - identify first num, check if those below it are the same
  - identify 2nd num, check if those below are the same. etc...
    if yes, break, 1 pair. Would rely on being triggered by no higher hands (eg set)
    wouldn't work for a Set

2 - sort the hand into quantities of each number
    identify quantity of 2
    Could repurpose this code for 2pair, set, full, 4OAK
*/

let pairOf = obj1.map((element) => {
  if (element.quantity = 2){
    return element.number
  }
  else {
    return 'nothing'
  }
})

console.log(pairOf);
