/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

// My eh solution:
const scramble = (str1, str2) => {
  const obj1 = {};
  const obj2 = {};

  for (let letter of str1) {
    if (obj1[letter]) obj1[letter] = obj1[letter] + 1;
    else obj1[letter] = 1;
  }

  for (let letter of str2) {
    if (obj2[letter]) obj2[letter] = obj2[letter] + 1;
    else obj2[letter] = 1;
  }

  return Object.keys(obj2).every((n) => obj1[n] >= obj2[n]);
};

// Top user solution:
function scramble(str1, str2) {
  let occurences = str1.split('').reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  return str2.split('').every((character) => --occurences[character] >= 0);
}

// Clever user solution:
const scramble = (str1, str2) =>
  [...str2].every((val) => str2.split(val).length <= str1.split(val).length);
