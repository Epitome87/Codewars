/*
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/

// My solution:
const solve = (str) => {
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') res += str[i];
    if (str[res.length] === ' ') res += ' ';
  }
  return res;
};

// Clever user solution:
function solve(str) {
  let arr = [...str].filter((x) => x != ' ');
  return str.replace(/\S/g, (_) => arr.pop());
}
