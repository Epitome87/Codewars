/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// My original solution:
const moveZeros = (arr) => {
  const noZeros = arr.filter((n) => n !== 0);
  const numZeros = arr.length - noZeros.length;
  const result = [...noZeros];

  for (let i = 0; i < numZeros; i++) result.push(0);

  return result;
};

// Top user solution:
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};

// My favorite user solution:
var moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
};
