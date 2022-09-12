/*
 */

// My solution:
function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0][0];
  args[0][0] = args[0][1];
  args[0][1] = temp;
}

// Top user solution:
function swapValues() {
  return arguments[0].reverse();
}

// Good user solution:
function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

/* Takeaways:
1) Although most likely not good practice, I did not realize you could change the values of the arguments passed into a method, without returning anything!
*/
