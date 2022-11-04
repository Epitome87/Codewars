/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

// My solution:
const moveTen = (s) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return [...s].map((c) => alpha[(alpha.indexOf(c) + 10) % 26]).join('');
};

// Top user solution:
function moveTen(s) {
  return s
    .split('')
    .map((e) =>
      e.charCodeAt(0) + 10 > 122 ? String.fromCharCode(e.charCodeAt(0) - 16) : String.fromCharCode(e.charCodeAt(0) + 10)
    )
    .join('');
}

// Another good user solution:
function moveTen(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let move10 = 'klmnopqrstuvwxyzabcdefghij';
  return s.replace(/[a-z]/g, (x) => move10[alphabet.indexOf(x)]);
}

// Another good user solution:
const moveTen = (s) => s.replace(/./g, (val) => String.fromCharCode(97 + ((val.charCodeAt() - 87) % 26)));
