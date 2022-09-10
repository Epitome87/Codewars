/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
 */

// My solution:
String.prototype.digit = function () {
  return /^\d$/.test(this);
};

/* Takeaways:
1) This one took a lot of Googling! ^ means it must start with the character, and $ means it must end with it.
*/
