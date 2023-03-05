/*
Write a single function that can be invoked by either

```javascript

sum(2,3); //5 //or sum(2)(3); //5```

clojure (sum 2 3) ;; 5 ;;or ((sum 2) 3) ;; 5

Both of these examples should return the sum of the 2 numbers.
*/

// My solution:
const sum = (...args) =>
  args.length > 1 ? [...args].reduce((acc, curr) => acc + curr, 0) : (nextVal) => args[0] + nextVal;

// Top user solution:
function sum(a, b) {
  if (arguments.length === 1)
    return function (b) {
      return a + b;
    };
  return a + b;
}
