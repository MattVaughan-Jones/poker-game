module.exports = function(){
const numbers = [];

// adds numbers to the numbers
for ( let i = 2 ; i < 15 ; i++){
  numbers.push(i);
}

const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

// pair each number with a suit and create a deck array
const deck = [];
for (let i = 0 ; i < numbers.length ; i++){
  for (let j = 0 ; j < suits.length ; j++){
    deck.push({
      number: numbers[i],
      suit: suits[j]
    })
  }
}
return deck
}
