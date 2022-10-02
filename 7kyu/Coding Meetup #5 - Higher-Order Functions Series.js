/*
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
*/

// My solution:
const countLanguages = (list) => {
  const res = {};

  for (let dev of list) {
    if (res[dev.language]) res[dev.language]++;
    else res[dev.language] = 1;
  }

  return res;
};

// Top user solution:
function countLanguages(list) {
  var count = {};
  list.forEach((x) => (count[x.language] = (count[x.language] || 0) + 1));
  return count;
}

// Another good user solution:
const countLanguages = (list) => list.reduce((pre, val) => ((pre[val.language] = -~pre[val.language]), pre), {});

// My favorite user solution:
function countLanguages(list) {
  return list.reduce((acc, x) => (acc[x.language] ? acc[x.language]++ : (acc[x.language] = 1), acc), {});
}

// Another good use of reduce:
const countLanguages = (list) =>
  list.reduce((p, c) => {
    p[c.language] = (p[c.language] || 0) + 1;
    return p;
  }, {});

/* Takeaways:
1) Remember obj[prop] = (obj[prop] || 0) + 1 when incrementing a property!
2) Perhaps consider making use of ~ more (adds 1 to number, flips sign). So if a property does not exist in an object, we get ~undefined (which is -1), and then the - flips that to 1, which we set as the count of that property. For any other values, we take the value, add 1 (but flip the sign), and the - appropriately flips the sign back to normal!
*/
