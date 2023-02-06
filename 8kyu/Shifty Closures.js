/*
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

Original code:
var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};
*/

// My solution:
const greet_abe = () => 'Hello, Abe!';
const greet_ben = () => 'Hello, Ben!';
