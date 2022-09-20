/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values
*/

// My solution:
const toCsvText = (array) => array.join('\n');

// Good alternate user solution:
const toCsvText = (array) => array.map((row) => row.join(',')).join('\n');

/* Takeaways:
1) This works because: Array.prototype.join(separator) the elements of an array converted to strings and these strings are then concatenated, separated by occurrences of the separator. Return value: a composed string (a string with all array elements joined).
2) No matter how deep the nesting level, array.join() will return a string with no nested arrays?!
*/
