/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/

// My solution:
const kebabize = (str) =>
  str
    .replace(/[0-9]/g, '')
    .split('')
    .map((c, i) =>
      c === c.toUpperCase() ? `${i > 0 ? '-' : ''}${c.toLowerCase()}` : c
    )
    .join('');

// Top user solution:
function kebabize(str) {
  return str
    .replace(/[^a-z]/gi, '')
    .replace(/^[A-Z]/, (c) => c.toLowerCase())
    .replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}

// Clever user solution:
function kebabize(str) {
  var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
  return nonumber.join('-').toLowerCase();
}
