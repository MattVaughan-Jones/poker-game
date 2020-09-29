module.exports = function(){
  const numbers = [];

  // adds numbers to the numbers. J = 11, Q = 12, K = 13, A = 14.
  for ( let i = 2 ; i < 15 ; i++){
    numbers.push(i);
  }

  // pair each number with a suit and create a deck object
  const suits = ['s', 'h', 'c', 'd'];
  const newDeck = [];

  for (let i = 0 ; i < numbers.length ; i++){
    for (let j = 0 ; j < suits.length ; j++){
      newDeck.push({
        number: numbers[i],
        suit: suits[j]
      })
    }
  }
  return newDeck
}
