/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

// My solution:
const min = (arr, toReturn) => (toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr)));

// "Clever" user solution (although probably bad practice):
const min = (arr, toReturn, min = Math.min(...arr)) => (toReturn === 'value' ? min : arr.indexOf(min));

/* Takeaways:
1) Remember to make use of Math.min(...spreadArray)! At first I 
attempted to sort the array and access the first index.
*/
