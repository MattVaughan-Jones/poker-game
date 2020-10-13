//test file

let communityCards = [
  { number: 4, suit: 'd' },
  { number: 0, suit: 'c' },
  { number: 5, suit: 'h' },
  { number: 6, suit: 'd' },
  { number: 7, suit: 'h' },
  { number: 3, suit: 'd' },
  { number: 5, suit: 'h' }
]

let arr = [1, 4, 2, 6, 8, 5, 3, 2];

communityCards.sort((a, b) => {
  return a.number - b.number;
})

console.log(communityCards);

for (index = 0 ; index < 3 ; index ++) {
  if (communityCards[index].number + 1 === communityCards[index+1].number
  && communityCards[index].number + 2 === communityCards[index+2].number
  && communityCards[index].number + 3 === communityCards[index+3].number
  && communityCards[index].number + 4 === communityCards[index+4].number) {
    console.log('yes');
  }
  console.log(index);
}

//need to figure out what to do if there are duplicates in the middle












/*

*/
