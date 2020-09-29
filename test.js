//test file


let arr1 = [
  { number: 11, suit: 'c' },
  { number: 5, suit: 'd' },
  { number: 10, suit: 'c' },
  { number: 10, suit: 'h' },
  { number: 5, suit: 's' } ];
let arr2 = [20, 30, 1, 50];
let suit1 = 's';
let suit2 = 'd';
let obj1 = {arr1, suit1};
let obj2 = {arr2, suit2};
const arrFromObj1 = [];

//init value for 2nd reduce is output of the first
let max1 = arr1.reduce(function (accumulator, current){
  if (current.number > accumulator) {
    accumulator = current.number
  }
  return accumulator
}, 0);
console.log('max1: ' + max1);

let globalMax = arr2.reduce(function (accumulator, current){
  if (current > accumulator) {
    accumulator = current
  }
  return accumulator
}, max1);
console.log('global max: ' + globalMax);
