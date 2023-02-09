/*

Original code:
const state = {
  modifier: 2,
};

function solution(arr, options) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] += 2 * state.modifier;
  }
  
  console.log(arr);
  
  return arr;
}
*/

// My solution:
const solution = (arr, { modifier }) => arr.map((x) => (x += 2 * modifier));
