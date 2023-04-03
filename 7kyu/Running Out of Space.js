/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. 
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
*/

// My solution:
const spacey = (arr) => arr.map((_, idx) => arr.slice(0, idx + 1).join(''));

// Clever user solution:
function spacey(array) {
  let string = '';
  return array.map((e) => (string += e));
}
