/*
isNaN doesn't work very well. We want us to tell us whether the value or object we're dealing with is a number or not. Instead, it tells us if the value is equal to the NaN value it has on-record.

So let's make a proper function, called isAN, for is A Number. If you pass it a value, it will return true if a value is a valid primitive number or Number object, and false if not.
*/

// My solution:
const isAN = (value) => !isNaN(value) && (typeof value === 'number' || value instanceof Number);

// Clever user solution:
function isAN(value) {
  return value + '' == value + 0;
}

/* Takeaways:
1) Remember the instanceof operator: The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.
*/