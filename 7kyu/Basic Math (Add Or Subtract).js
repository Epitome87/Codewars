/*
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

// My eh solution:
const calculate = (str) => {
  const nums = str.match(/[0-9]+/g);
  const ops = str.match(/plus|minus/g);
  let res = +nums[0];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'plus') res += +nums[i + 1];
    else if (ops[i] === 'minus') res -= +nums[i + 1];
  }
  return res.toString();
};

// Top user solution (but note NEVER use eval in real-world apps!):
function calculate(str) {
  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}

// Clever user solution:
function calculate(str) {
  let result = '';

  result = str
    .split('plus')
    .join(' ')
    .split('minus')
    .join(' -')
    .split(' ')
    .reduce((a, c) => +a + +c);
  return result + '';
}
