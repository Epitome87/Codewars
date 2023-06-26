# [More Zeros Than Ones](https://www.codewars.com/kata/5d41e16d8bad42002208fe1a)

# Description

Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

```
'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']
```

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

## My Solution

**JavaScript**

```js
const moreZeros = (s) => [...new Set(s)].filter((x) => x.charCodeAt(0).toString(2).replace(/1/g, '').length > 3);
```

```js
function moreZeros(s) {
  const binary = [...s].map((char) => char.charCodeAt(0).toString(2));
  const filteredBinary = binary.filter(
    (el, idx, arr) =>
      [...el].reduce((acc, curr) => (curr === '0' ? acc + 1 : acc), 0) > Math.floor(el.length / 2) &&
      idx === arr.indexOf(el)
  );
  return filteredBinary.map((el) => String.fromCharCode(parseInt(el, 2)));
}
```

## User Solution

**JavaScript**

```js
function moreZeros(s) {
  let arrCodePoints = s
    .split('')
    .map((c) => c.charCodeAt(0))
    .map((n) => n.toString(2));
  let chars = arrCodePoints.filter((s) => s.split('0').length > s.split('1').length).map((s) => parseInt(s, 2));
  let uniq = new Set(chars);
  return String.fromCharCode(...Array.from(uniq)).split('');
}
```

## Takeaways

1. Remember that String.fromCharCode() can accept more than one integer as an argument, returning a corresponding character for each and concatenating them.
2. Also remember that a Set can accept a string in its constructor, not just the result of spreading an array.
