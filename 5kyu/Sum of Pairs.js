/*
 */

// My original attempt -- too slow!:
const sumPairs = (ints, sum) => {
  let results;
  let limit = ints.length;

  for (let i = 0; i < limit; i++) {
    for (let j = i + 1; j < limit; j++) {
      if (ints[i] + ints[j] === sum) {
        limit = j;
        results = [ints[i], ints[j]];
      }
    }
  }

  return results;
};

// My refactored solution:
const sumPairs = (ints, sum) => {
  let seen = new Set();

  for (let i = 0; i < ints.length; i++) {
    let needed = sum - ints[i];

    if (seen.has(needed)) {
      return [needed, ints[i]];
    }

    seen.add(ints[i]);
  }

  return undefined;
};

// Top user solution:
var sum_pairs = function (ints, s) {
  var seen = {};
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true;
  }
};

// Another good user solution:
function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}

/* Takeaways:
1) Returning undefined is actually not necessary, as it will be returned automatically if no other returns are found.
2) When using nested for loops to process some operation on two numbers in an array, consider using Set or an object to keep
track of which elements have already been visited. This will eliminate the need for the inner for loop on occasions.
3) When the index isn't really important, consider a for-of loop for array iteration.
*/
