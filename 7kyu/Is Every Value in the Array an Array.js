/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

// My solution:
const arrCheck = (value) => value.every(Array.isArray);

/* Takeaways:
1) We can't use typeof to check for an Array, as it returns "object". 
So we can use the Array.isArray(value) method!
*/
