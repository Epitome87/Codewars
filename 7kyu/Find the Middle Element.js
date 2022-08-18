/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// My eh solution:
const gimme = (triplet) => {
  const tripletIndex = {
    [triplet[0]]: 0,
    [triplet[1]]: 1,
    [triplet[2]]: 2,
  };

  return obj[[...triplet].sort((a, b) => a - b)[1]];
};

// Top user solution:
function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

// My refactored version of top user solution:
const gimme = (arr) => arr.indexOf([...arr].sort((x, y) => x > y)[1]);

/* Takeways:
1) Remember the array.indexOf() method!
*/
