/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

// My solution:
const expandedForm = (num) => {
  let numStr = String(num);
  let res = [];

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] != 0) res.push(numStr[i] + '0'.repeat(numStr.length - i - 1));
  }

  return res.join(' + ');
};

// My original solution:
const expandedForm = (num) => {
  let numStr = String(num);
  let res = [];

  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] != 0) res.unshift(numStr[i] + '0'.repeat(numStr.length - i - 1));
  }

  return res.join(' + ');
};

// Good user solution:
function expandedForm(num) {
  return String(num)
    .split('')
    .map((num, index, arr) => num + '0'.repeat(arr.length - index - 1))
    .filter((num) => Number(num) != 0)
    .join(' + ');
}

/* Takeaways:
1) Can also use string.padEnd(numCharacters,fillValue) instead of .repeat()
*/
