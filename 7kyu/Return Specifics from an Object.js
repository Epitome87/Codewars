/*
Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the following string: The Object is Empty
Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e'] 
*/

// My solution:
const returnSpecifics = (obj) => {
  if (Object.keys(obj).length === 0) return ['The Object is Empty'];
  const numbers = [];
  const functions = [];
  for (const prop in obj) {
    if (typeof obj[prop] === 'number') numbers.push(obj[prop]);
    else if (typeof obj[prop] === 'function') functions.push(prop);
  }
  return [...numbers, ...functions];
};

// Clever user solution:
function returnSpecifics(obj) {
  var keys = Object.keys(obj);
  if (keys.length == 0) return ['The Object is Empty'];
  var numbers = keys.filter((x) => Number(obj[x]) === obj[x]).map((x) => obj[x]),
    methods = keys.filter((x) => obj[x] && {}.toString.call(obj[x]) === '[object Function]');
  return [...numbers, ...methods];
}

/* Takeaways:
1) Iterating through an Object is a hassle on Codewars, as sometimes the Kata does not seem to correctly support the for-in mechanism!
*/
