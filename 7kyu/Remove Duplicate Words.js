/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

// My solution:
const removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ');

// Less JavaScript-specific user solution:
const removeDuplicateWords = (s) => {
  let arr = s.split(' ');
  let sFiltered = [];

  for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str);

  return sFiltered.join(' ');
};

/* Takeways:
1) Remember, a Set is an object-like data structure which removes duplicates on its own. So we have to spread it inside an array in order to actually get an array. 
*/
