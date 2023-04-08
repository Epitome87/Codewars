/*

Original code:
var FilterNumbers = function(str) {
  return str.split('').filter(c => !parseInt(c)).join('');
}
*/

// My solution:
const FilterNumbers = (str) => [...str].filter((c) => !Number.isInteger(+c)).join('');

// Top user solution:
var FilterNumbers = function (str) {
  return str
    .split('')
    .filter((c) => isNaN(c))
    .join('');
};

// Clever user solution:
const FilterNumbers = (str) => str.replace(/\d/g, '');

/* Takeaways:
1) The original code's use of !parseInt(c) did not work properly, as parseInt(0) returns 0, a falsy value.
*/
