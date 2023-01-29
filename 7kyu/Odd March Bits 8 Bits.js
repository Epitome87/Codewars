/*
Odd bits are getting ready for Bits Battles.

Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

Return an array of all the steps.

1 <= n <= 8

NOTE: n != 0, because n represents the number of 1s.

Examples
This resembles a simple 8 LED chaser:

n = 3

00000111
00001110
00011100
00111000
01110000
11100000
n = 7

01111111
11111110
*/

// My solution:
const bitMarch = (n) =>
  Array.from({ length: 9 - n }, (_, i) =>
    `${'0'.repeat(8 - n - i)}${'1'.repeat(n)}${'0'.repeat(i)}`.split('').map(Number)
  );

// Top user solution:
function bitMarch(n) {
  var arr = [];
  for (var i = 7; i >= n - 1; i--) {
    var result = [0, 0, 0, 0, 0, 0, 0, 0];
    for (var j = 0; j < n; j++) {
      result[i - j] = 1;
    }
    arr.push(result);
  }
  return arr;
}

// Another good user solution:
function bitMarch(n) {
  var arr = [0, 0, 0, 0, 0, 0, 0, 0];
  var len = arr.length;
  var res = [];
  for (let i = len - n; i >= 0; i--) {
    let temp = [...arr];
    for (let j = 0; j < n; j++) {
      temp[i + j] = 1;
    }
    res.push(temp);
  }
  return res;
}
