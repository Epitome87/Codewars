# [Sort the Bytes](https://www.codewars.com/kata/6076d4edc7bf5d0041b31dcf)

## Description

**Task**

Implement a function that takes an unsigned 32 bit integer as input and sorts its bytes in descending order, returning the resulting (unsigned 32 bit) integer.

An alternative way to state the problem is as follows: The number given as input is made up of four bytes. Reorder these bytes so that the resulting (unsigned 32 bit) integer is as large as possible.

**Example**

```
Input: 3735928559

3735928559 is 0xdeadbeef in hexadecimal representation and 11011110 10101101 10111110 11101111
in binary representation.

After sorting the bytes in descending order the resulting unsigned 32 bit integer is 4024352429
in decimal representation, which is 0xefdebead in hexadecimal and 11101111 11011110 10111110 10101101
in binary.

Output should be: 4024352429
```

## My Solution

```js
// Incredibly ugly one-liner:
const sortBytes = (uint32) =>
  parseInt(
    Array.from({ length: 4 }, (_, i) =>
      uint32
        .toString(2)
        .padStart(32, '0')
        .slice(i * 8, i * 8 + 8)
    )
      .sort((a, b) => b.localeCompare(a))
      .join(''),
    2
  );
```

```js
const sortBytes = (uint32) => {
  const binStr = uint32.toString(2).padStart(32, '0');
  const binArr = Array.from({ length: 4 }, (v, i) => binStr.slice(i * 8, i * 8 + 8));
  return parseInt(binArr.sort((a, b) => b.localeCompare(a)).join(''), 2);
};
```

```js
// Straightforward solution
const sortBytes = (uint32) => {
  const binStr = uint32.toString(2).padStart(32, '0');
  const binArr = [];
  for (let i = 0; i < binStr.length; i += 8) binArr.push(binStr.slice(i, i + 8));
  const sortedBinArr = binArr.sort((a, b) => b.localeCompare(a));
  return parseInt(binArr.join(''), 2);
};
```

### User Solution

```js
function sortBytes(uint32) {
  return parseInt(
    uint32
      .toString(2)
      .padStart(32, '0')
      .match(/[0-1]{8}/g)
      .sort((a, b) => b - a)
      .join(''),
    2
  );
}
```

```js
const sortBytes = (n) =>
  [0, 1, 2, 3]
    .map((e) => (n >> (8 * e)) & 255)
    .sort((a, b) => b - a)
    .reduce((a, b) => 256 * a + b, 0);
```
