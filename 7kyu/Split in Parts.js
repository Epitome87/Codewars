/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive
*/

// My solution:
const splitInParts = (s, partLength) =>
  s
    .split('')
    .map((c, idx) => ((idx + 1) % partLength ? c : c + ' '))
    .join('')
    .trim();

// Clever user solution:
const splitInParts = (s, partLength) => s.match(new RegExp(`.{1,${partLength}}`, 'g')).join(' ');
