/*
apitalize First Letter of a String
Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

Input	Output
string	String
hello World	Hello World
i love codewars	I love codewars
This sentence is already capitalized	This sentence is already capitalized
0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.
*/

// My solution:
String.prototype.capitalize = function () {
  let code = this.charCodeAt(0);
  if (code > 96 && code < 123) code -= 32;

  return String.fromCharCode(code) + this.slice(1);
};

// Good user solution using Regex:
String.prototype.capitalize = function () {
  return this.replace(/^[a-z]/, (val) => String.fromCharCode(val.charCodeAt(0) - 32));
};

/* Takeaways:
1) Remember the str.charCodeAt(index) and String.fromCharCode(code) methods!
*/
