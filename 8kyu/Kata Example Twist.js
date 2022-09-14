/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.
*/

// My solution:
const websites = Array(1000).fill('codewars');

/* Takeaways:
1) Remember: Array(size) creates a new array (no 'new' keyword necessary).
2) Remember: .fill() works on an instance of an array, not on the Array class, like Array.from()
*/
