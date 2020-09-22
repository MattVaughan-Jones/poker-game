module.exports = function(){
const numbers = [];

// adds numbers to the numbers
for ( let i = 2 ; i < 11 ; i++){
  numbers.push(i);
}
numbers.push('J', 'Q', 'K', 'A'); // adds J, Q, K, A to numbers

const suits = ['s', 'h', 'c', 'd'];

// pair each number with a suit and create a deck array
const deck = [];
for (let i = 0 ; i < numbers.length ; i++){
  for (let j = 0 ; j < suits.length ; j++){
    deck.push(numbers[i] + suits[j]);
  }
}
return deck
}
