/*
Prince Arthas needs your help! Mal'ganis has spread an infection amongst the Stratholme citizens, and we must help Arthas prevent this infection from spreading to other parts of the Kingdom.

You will receive a string s as input: Each "word" represents a house, and each letter represents a citizen. All infected citizens are represented as "i" or "I" in s. You must eradicate them, and their neighbors. If an infected citizen appears after or before a space, you should not delete the space, but keep in mind that the distance from "house" to "house" (word to word) has to have only one space.

EXAMPLES:

"STRING"                       -> "STG"
"1i2 33 i4i5 i555ii5"          -> "33 5"
"It is a bit chilly"           -> "a cly"
"Pineapple pizza is delicious" -> "eapple za deus"
"It is not there"              -> "not there"
NOTES:

There are no apostrophes or any non-alphanumeric characters other than spaces.
Make sure there are no leading or trailing spaces in the result string
You will always be given a valid string.
You won't be provided any empty strings.
Good luck and for the Alliance!
*/

// My eh solution:
const purifyTheStratholme = (s) => {
  const isInfected = (char) => char === 'i' || char === 'I';
  const res = s
    .split(' ')
    .map((house) =>
      [...house]
        .filter(
          (x, idx, arr) =>
            !isInfected(x) &&
            !isInfected(arr[idx - 1]) &&
            !isInfected(arr[idx + 1])
        )
        .join('')
    );
  return res.filter((house) => house.length > 0).join(' ');
};

// Top user solution:
function purifyTheStratholme(s) {
  return s.replace(/.?i+.?/gi, '').trim();
}

// Another good user solution:
function purifyTheStratholme(s) {
  return s
    .replace(/\w?i+\w?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}
