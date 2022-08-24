/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

// My solution:
const count = (array) => {
  const unique = {};

  array.forEach((el) => {
    if (unique[el]) unique[el]++;
    else unique[el] = 1;
  });

  return unique;
};

// Top user solution:
function count(array) {
  return array.reduce(function (stack, value) {
    return stack[value] ? stack[value]++ : (stack[value] = 1), stack;
  }, {});
}

// Top user solution refactored:
const count = (array) =>
  array.reduce(
    (stack, value) => (stack[value] ? stack[value]++ : (stack[value] = 1)),
    stack,
    {}
  );
