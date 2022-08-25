/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

// My solution:
const generateHashtag = (str) => {
  if (!str || str.replace(/[ ]/g, '').length === 0) return false;

  const result =
    '#' +
    str
      .split(' ')
      .filter((el) => el !== '')
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join('');

  return result.length > 140 ? false : result;
};

// Top user solution (fails some edge cases, though!):
function generateHashtag(str) {
  return str.length > 140 || str === '' ? false : '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Good user solution:
function generateHashtag(str) {
  var hashtag = str.split(' ').reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

// Another good user solution, similar to mine:
function generateHashtag(str) {
  var hashed =
    '#' +
    str
      .split(' ')
      .map(function (v) {
        return v.charAt(0).toUpperCase() + v.slice(1);
      })
      .join('');
  return hashed.length > 140 || str == '' ? false : hashed;
}

/* Takeways:
1) Remember: Even though splitting a string on " " leaves sequential spacing as "" in the array, when we join(' ') the array later, these will be removed. So we don't need to filter out empty characters in the array, like I do in my solution.
*/
