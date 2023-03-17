/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/

// My solution:
Math.round = (number) => (number % 1 < 0.5 ? parseInt(number) : parseInt(number) + 1);
Math.ceil = (number) => (parseInt(number) === number ? number : parseInt(number) + 1);
Math.floor = (number) => parseInt(number);

// Clever user solution:
Math.floor = (number) => parseInt(number);
Math.round = (number) => Math.floor(number + 0.5);
Math.ceil = (number) => (Number.isInteger(number) ? number : Math.floor(number + 1));
