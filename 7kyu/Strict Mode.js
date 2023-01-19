/*
Write a function that returns whether it is running in strict mode.
*/

// My solution:
const isInStrictMode = () => typeof this == 'undefined';

// Top user solution:
const isInStrictMode = () => !this;

/* Takeaways:
1) Look more into Strict Mode! 
2) In Strict Mode, 'this' is 'undefined' within a global method.
*/
