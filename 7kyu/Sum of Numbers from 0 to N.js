/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

// My solution (didn't bother refactoring on this terrible, god-awful challenge):
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    const arr = [];

    for (let i = 0; i <= count; i++) {
      arr.push(i);
    }

    if (count < 0) return `${count}<0`;
    if (count === 0) return '0=0';

    return `${arr.join('+')} = ${(count * (count + 1)) / 2}`;
  };

  return SequenceSum;
})();

// Clever user solution:
class SequenceSum {
  static showSequence(n) {
    return n < 0
      ? `${n}<0`
      : `${Array.from({ length: n + 1 }, (v, k) => k).join('+')}${n ? ' = ' : '='}${(n * (n + 1)) / 2}`;
  }
}
