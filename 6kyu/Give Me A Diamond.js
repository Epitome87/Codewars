/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

// My (struggled) solution:
const diamond = (n) => {
  if (n < 0 || n % 2 === 0) return null;

  const middle = Math.floor(n / 2);
  let diamondString = '';

  for (let i = 0; i < n; i++) {
    const spaceCount = Math.abs(i - middle);
    const numberOfAsterisks = n - spaceCount * 2;
    diamondString += ' '.repeat(spaceCount) + '*'.repeat(numberOfAsterisks) + '\n';
  }

  return diamondString;
};

// One of the better user solution:
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;

  str = '';

  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += ' '.repeat(len);
    str += '*'.repeat(n - 2 * len);
    str += '\n';
  }

  return str;
}
