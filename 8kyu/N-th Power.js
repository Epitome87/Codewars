/*
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/

// My solution:
const index = (array, n) => (n < 0 || n >= array.length ? -1 : array[n] ** n);

// My solution, after submission:
const index = (array, n) => n >= array.length ? -1 : array[n] ** n;

//  Clever user solution:
const index = (array, n) => array[n] ** n || -1;

/* Takeways:
1) Read the rules clearly! They stated n would be non-negative, so my check for n < 0 is pointless.
2) Sometimes we can ignore index boundary checks and just check the result of plugging that index into the array! Remember, this is not C# where accessing an array out of bound gives dramatic errors.