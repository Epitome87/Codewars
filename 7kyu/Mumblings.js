/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// My not-very-elegant solution:
function accum(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    // Handle initial capital case
    result += s[i].toUpperCase();

    for (let j = 0; j < i; j++) {
      result += s[i].toLowerCase();
    }

    if (i != s.length - 1) result += '-';
  }

  return result;
}

// Top user solution (modified me to use shorthand arrow function):
// TODO: Remember the repeat function on a string!
const accum = (s) =>
  s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
