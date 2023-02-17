/*
JavaScript 1.8.5 helpfully added the Array.isArray function, which can tell you whether its argument is an Array or not. Without it, checking whether something is an Array is rather tricky. How would you do it if you had to?
*/

// My (researched) solution:
const isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]';

// Another good user solution:
function isArray(arr) {
  return (arr instanceof Array || arr === Array.prototype) && arr.hasOwnProperty('length');
}
