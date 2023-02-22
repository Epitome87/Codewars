/*
You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

You can assume, that the input string has always non-zero length.

Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
*/

// My solution:
const firstNonRepeated = (s) => {
  if ([...new Set(s)].size === s.length) return s[0];
  for (let char of s) {
    if (s.indexOf(char) === s.lastIndexOf(char)) return char;
  }
  return null;
};

// My 2nd solution:
const firstNonRepeated = (s) => {
  if ([...s].every((char) => s.indexOf(char) === s.lastIndexOf(char))) return s[0];
  for (let char of s) {
    if (s.indexOf(char) === s.lastIndexOf(char)) return char;
  }
  return null;
};

// Top user solution:
const firstNonRepeated = (s) => [...s].find((i) => s.indexOf(i) == s.lastIndexOf(i)) || null;

/* Takeaways:
1) My solution contained unnecessary logic! We do not need to test if every character is unique, as the result of that case is simply returning the first unique character anyway.
2) I also keep neglecting to utilize the Array.prototype.find(condition) method!
*/
