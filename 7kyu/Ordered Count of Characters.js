/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// My solution:
const orderedCount = (text) => {
  const uniques = text.split('').filter((c, index) => text.indexOf(c) === index);
  return uniques.map((letter) => [letter, text.split(letter).length - 1]);
};

// Top user solution:
const orderedCount = (s) => Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

// Good user solution:
const orderedCount = (str) => [...new Set([...str])].map((char) => [char, str.split(char).length - 1]);

/* Takeaways*
1) The indexOf() method is useful when we only want to keep the first occurrence of a character.
2) The split() method is useful when we want to count the occurrence of the character we are splitting by.
Example: If you split 'Bob is a blob' by 'by', we get: ["","o"," is a ","lo",""]. Note how the number of times 'b' occurs is the length of this split array minus one.
*/
