/*
 */

// My refactored solution:
const heavyMetalUmlauts = (boringText) =>
  [
    ['A', 'Ä'],
    ['E', 'Ë'],
    ['I', 'Ï'],
    ['O', 'Ö'],
    ['U', 'Ü'],
    ['Y', 'Ÿ'],
    ['a', 'ä'],
    ['e', 'ë'],
    ['i', 'ï'],
    ['o', 'ö'],
    ['u', 'ü'],
    ['y', 'ÿ'],
  ].reduce(
    (acc, curr) => acc.replace(new RegExp(curr[0], 'g'), curr[1]),
    boringText
  );

// My original solution:
const heavyMetalUmlauts = (boringText) => {
  const vowels = [
    ['A', 'Ä'],
    ['E', 'Ë'],
    ['I', 'Ï'],
    ['O', 'Ö'],
    ['U', 'Ü'],
    ['Y', 'Ÿ'],
    ['a', 'ä'],
    ['e', 'ë'],
    ['i', 'ï'],
    ['o', 'ö'],
    ['u', 'ü'],
    ['y', 'ÿ'],
  ];
  for (let vowel of vowels)
    boringText = boringText.replace(new RegExp(vowel[0], 'g'), vowel[1]);
  return boringText;
};

// Great user solution:
function heavyMetalUmlauts(str) {
  let rp = {
    A: 'Ä',
    E: 'Ë',
    I: 'Ï',
    O: 'Ö',
    U: 'Ü',
    Y: 'Ÿ',
    a: 'ä',
    e: 'ë',
    i: 'ï',
    o: 'ö',
    u: 'ü',
    y: 'ÿ',
  };
  return str.replace(/[aeiouy]/gi, (m) => rp[m]);
}

/* Takeaways:
1) Don't forget: The second paramater in the replace function can be a replacement function!
This replacement function uses the character being replaced as a param.
*/
