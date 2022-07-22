/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

/*  Thought process:
- Will probably make use of Math.min()
- Probably one of the higher-order array methods
- ...Meaning I'll have to use .split on the string to convert to array
*/

// My solution:
const findShort = (s) => Math.min(...s.split(' ').map((word) => word.length));
