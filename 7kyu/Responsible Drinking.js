/*
Welcome to the Codewars Bar!
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples
"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
Note:

To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...
*/

// My solution:
const hydrate = (s) => {
  const numWater = s.match(/[0-9]/g).reduce((acc, curr) => acc + Number(curr), 0);
  return `${numWater} ${numWater > 1 ? 'glasses' : 'glass'} of water`;
};

// Top non-Regex user solution:
function hydrate(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) > 0) {
      answer += +s[i];
    }
  }
  return answer > 1 ? `${answer} glasses of water` : '1 glass of water';
}

// Another good user solution:
const hydrate = (s, w = [...s].filter((x) => !isNaN(x)).reduce((a, b) => a + +b, 0)) =>
  `${w} glass${w === 1 ? '' : 'es'} of water`;

/* Takeaways:
1) Putting a string inside parseInt and checking if it results in > 0 can help us find if a string can be converted to a Number.
2) Using isNaN(str) is also a good way to check for valid numbers as part of strings.
*/
