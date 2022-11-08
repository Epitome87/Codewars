/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

// My solution:
const largest = (n, arr) => (n ? [...arr].sort((a, b) => a - b).slice(-n) : []);

// Clever user solution:
const largest = (n, arr) => [...arr].sort((a, b) => a - b).slice(arr.length - n);

/* Takeaways:
1) I used a conditional check in order to handle the case where n is 0, as that would make .slice(0), which would return ALL elements of the array, not 0 of them. However, the logic of taking the length of the array and then subtracting the n would have worked inside the slice method!
*/
