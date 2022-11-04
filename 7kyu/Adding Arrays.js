/*
Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

Examples:

arrAdder([
['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']
]) // => "Just Live Life Man"

arrAdder([ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"
*/

// My solution:
const arrAdder = (arr) => {
  const result = [];

  for (let row = 0; row < arr[0].length; row++) {
    let colStr = '';
    for (let col = 0; col < arr.length; col++) {
      colStr += arr[col][row];
    }
    result.push(colStr);
  }

  return result.join(' ');
};

// Top user solution:
function arrAdder(arr) {
  var sentence = '';
  for (var i = 0; i < arr[0].length; i++) {
    for (var j = 0; j < arr.length; j++) {
      sentence += arr[j][i];
    }
    sentence += ' ';
  }
  return sentence.trim();
}

// Clever user solution:
const arrAdder = (arr) => arr[0].map((_, i) => arr.map((_, j) => arr[j][i]).join('')).join(' ');
