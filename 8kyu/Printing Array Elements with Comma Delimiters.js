/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level
*/

// My solution:
const printArray = (array) => array.join(',');

// Top solution:
function printArray(array) {
  return array.join();
}

/* Takeaways:
1) By default, join() separates elements with an ',', so we don't have to pass it as an argument.
*/
