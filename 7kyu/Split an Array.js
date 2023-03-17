/*
Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

Javascript example:

var obj1 = { prop: true },
    obj2 = { prop: false };
    
split([obj1, obj2], 'prop');
// [[obj1], [obj2]]
CoffeeScript example:

obj1 = { prop: true }
obj2 = { prop: false }

split [obj1, obj2], 'prop'
# [[obj1], [obj2]]
*/

// My one-line solution:
const split = (arr, prop) =>
  arr.reduce((acc, curr) => (curr[prop] ? [[...acc[0], curr], acc[1]] : [acc[0], [...acc[1], curr]]), [[], []]);

// My solution:
const split = (arr, prop) => {
  const truthy = [],
    falsy = [];
  for (let obj of arr) obj[prop] ? truthy.push(obj) : falsy.push(obj);
  return [truthy, falsy];
};

// Clever user solution:
const split = (array, prop) => [array.filter((item) => item[prop]), array.filter((item) => !item[prop])];
