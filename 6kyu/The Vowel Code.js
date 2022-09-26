/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// My solution:
const encode = (string) =>
  string
    .split('')
    .map((c) => ('aeiou'.includes(c) ? 'aeiou'.indexOf(c) + 1 : c))
    .join('');

const decode = (string) =>
  string
    .split('')
    .map((c) => ('12345'.includes(c) ? 'aeiou'[c - 1] : c))
    .join('');

// Top user solution:
function encode(string) {
  return string.replace(/[aeiou]/g, function (x) {
    return '_aeiou'.indexOf(x);
  });
}

function decode(string) {
  return string.replace(/[1-5]/g, function (x) {
    return '_aeiou'.charAt(x);
  });
}

/* Takeaways:
1) Utilize the String.prototype.replace() method more often!
2) Also utilize the String.prototype.charAt() more often. If string is empty, it will return an empty string rather than undefined, which may be useful sometimes.
*/