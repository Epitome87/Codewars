/*
Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW
Note: There will be at least two words in the given string!
*/

// My solution:
const toAcronym = (str) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');

// My favorite user solution:
const toAcronym = (inp) => inp.match(/\b\w/g).join(``).toUpperCase();

/* Takeaways:
1) The user Regex solution has the following logic:
\b assert position at a word boundary: (^\w|\w$|\W\w|\w\W)
\w matches any word character (equivalent to [a-zA-Z0-9_])
*/
