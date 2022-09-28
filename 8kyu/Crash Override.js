/*
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
Happy hacking!
*/

// My solution:
const aliasGen = (first, last) => {
  const a = firstName[first.slice(0, 1).toUpperCase()];
  const b = surname[last.slice(0, 1).toUpperCase()];

  if (a && b) return `${a} ${b}`;
  return 'Your name must start with a letter from A - Z.';
};

// Good user solution:
function aliasGen(a, b) {
  return /^[a-z]/i.test(a) && /^[a-z]/i.test(b)
    ? `${firstName[a[0].toUpperCase()]} ${surname[b[0].toUpperCase()]}`
    : 'Your name must start with a letter from A - Z.';
}
