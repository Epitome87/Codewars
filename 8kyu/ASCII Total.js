/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/

// My solution:
const uniTotal = (string) => string.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
