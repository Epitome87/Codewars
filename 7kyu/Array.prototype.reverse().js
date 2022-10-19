/*
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
*/

// My solution:
Array.prototype.reverse = function () {
  const length = this.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    const temp = this[i];
    this[i] = this[length - i - 1];
    this[length - i - 1] = temp;
  }

  return this;
};

// Top user solution:
Array.prototype.reverse = function () {
  for (var i = 0, j = this.length - 1; i < j; i++, j--) {
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
};

// Clever user solution:
Array.prototype.reverse = function () {
  var arr = this.splice(0);

  while (arr.length) {
    this.push(arr.pop());
  }

  return this;
};
