/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

// My solution:
const sameCase = (a, b) => {
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1;

  const charACase = a.toLowerCase() === a ? 'lower' : 'upper';
  const charBCase = b.toLowerCase() === b ? 'lower' : 'upper';

  if (charACase === charBCase) return 1;
  if (charACase !== charBCase) return 0;
};

// Top user solution:
function sameCase(a, b) {
  if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
    return -1;
  } else if ((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())) {
    return 1;
  } else {
    return 0;
  }
}

/* Takeaways:
1) The user's way to test for a letter was clever, if we want to avoid Regex.
*/
