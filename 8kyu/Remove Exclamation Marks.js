/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// My solution:
// ( NOTE: There is a String.replaceALl method, but this site didn't allow it?)
const removeExclamationMarks = (s) =>
  s
    .split('')
    .map((c) => (c === '!' ? '' : c))
    .join('');

// User solution:
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

// Very clever user solution!:
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
