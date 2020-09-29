//test file


let arr1 = [1, 2, 3, 1, 7];
let arr2 = [20, 30, 1, 50];
let suit1 = 's';
let suit2 = 'd';
let obj1 = {arr1, suit1};
let obj2 = {arr2, suit2};
const arrFromObj1 = [];

/*
for (i = 0 ; i < obj1[0].length ; i++){
  arrFromObj1.push(obj1[0][i]);
}
*/
//console.log(Math.max(...obj1.arr1, obj2.arr2));

/*
const reducer = function(accumulator, current){
  if (current > accumulator){
    accumulator = current;
  }
  else {
    accumulator = accumulator;
  }
}
*/


//init value for 2nd reduce is output of the first

let max1 = arr1.reduce(function (accumulator, current){
  if (current > accumulator) {
    accumulator = current
  }
  return accumulator
});

let globalMax = arr2.reduce(function (accumulator, current){
  if (current > accumulator) {
    accumulator = current
  }
  return accumulator
}, max1);
console.log('global max: ' + globalMax);
