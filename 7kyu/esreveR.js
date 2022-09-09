/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

// My solution:
const reverse = (array) => {
  const reversed = [];

  for (let i = array.length - 1; i >= 0; i--) reversed.push(array[i]);
  return reversed;
};

// Clever user solution:
reverse = function (array) {
  return array.reduceRight(function (a, v) {
    return a.push(v), a;
  }, []);
};

// Good user solution:
function reverse(array) {
  return array.reduce(function (a, b) {
    return [b].concat(a);
  }, []);
}

// Good user solution:
reverse = function (array) {
  return array.map((c, i) => array[array.length - 1 - i]);
};
