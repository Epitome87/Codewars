/*
What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

More info can be found here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

// My solution:
Array.prototype.filter = function (func) {
  const results = [];

  for (let item of this) {
    if (func(item)) results.push(item);
  }

  return results;
};
