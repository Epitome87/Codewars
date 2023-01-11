/*
Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

// My solution:
const consonantCount = (str) =>
  (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;

// Clever user solution:
const consonantCount = (str) => str.replace(/[\W\daeiou_]/gi, '').length;
