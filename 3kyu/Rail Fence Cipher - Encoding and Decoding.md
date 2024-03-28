# [Rail Fence Cipher: Encoding and Decoding](https://www.codewars.com/kata/58c5577d61aefcf3ff000081)

## Description

Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

```
W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C
    A       I       V       D       E       N
```

The encoded string would be:

```
WECRLTEERDSOEEFEAOCAIVDEN
```

Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

## My Solution

**JavaScript**

```js
const railGenFn = (x) => (i) => Math.abs(x - ((x + i) % (x * 2)));

const encodeRailFenceCipher = (string, numberRails) => {
  const railGen = railGenFn(numberRails - 1);
  return [...string]
    .reduce(
      (acc, cur, i) => (acc[railGen(i)].push(cur), acc),
      Array.from({ length: numberRails }, () => [])
    )
    .flat()
    .join('');
};

const decodeRailFenceCipher = (string, numberRails) => {
  const railGen = railGenFn(numberRails - 1);
  const strArr = [...string];
  const railCount = [...string].reduce((acc, _, idx) => (acc[railGen(idx)]++, acc), Array(numberRails).fill(0));
  const rail = [...Array(numberRails)].reduce(
    (acc, _, idx) => ((acc[idx] = strArr.splice(0, railCount[idx])), acc),
    Array.from({ length: numberRails }, () => [])
  );
  return [...string].reduce((acc, _, idx) => acc + rail[railGen(idx)].shift(), '');
};
```

### User Solution

**JavaScript**

```js
function* rails(rn, ln) {
  for (var rc = 0; rc < rn; ++rc) {
    var rv = rc,
      rd = rc;
    while (rv < ln) {
      yield rv;
      rv += 2 * (rn - 1 - (rn == rd + 1 ? 0 : rd));
      rd = rn - 1 - rd;
    }
  }
}

function encodeRailFenceCipher(s, numberRails) {
  return Array.from(rails(numberRails, s.length))
    .map(function (i) {
      return s[i];
    })
    .join('');
}

function decodeRailFenceCipher(s, numberRails) {
  var r = [];
  for (var [i, k] of Array.from(rails(numberRails, s.length)).entries()) {
    r[k] = s[i];
  }
  return r.join('');
}
```
