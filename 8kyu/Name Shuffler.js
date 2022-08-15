/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

// My solution:
const nameShuffler = (str, strArray = str.split(' ')) => strArray[1] + ' ' + strArray[0];

// My other solution:
const nameShuffler = (str) => str.split(' ').reverse().join(' ');
