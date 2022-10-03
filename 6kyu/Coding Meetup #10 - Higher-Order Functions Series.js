/*
Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

*/

// My solution:
const addUsername = (list) =>
  list.map((dev) => ({
    ...dev,
    username: `${dev.firstName.toLowerCase()}${dev.lastName[0].toLowerCase()}${new Date().getFullYear() - dev.age}`,
  }));

// Top user solution:
function addUsername(list) {
  return list.map(function (x) {
    x.username = x.firstName.toLowerCase() + x.lastName[0].toLowerCase() + (new Date().getFullYear() - x.age);
    return x;
  });
}

// Clever user solution:
const addUsername = (a) =>
  a.map((e) => {
    return (e.username = (e.firstName + e.lastName[0]).toLowerCase() + (new Date().getFullYear() - e.age)), e;
  });

/* Takeaways:
1) Although I find my solution better, note how the first user solution keeps his code as only one statement: He does list.map(...) || list. Since map will return undefined, the statement to the right of the || operator runs, thus returning the list (now with usernames added).
2) Note how in the second user solution, he manages with having only a map expression without needing to spread the object into each iteration of map. HOW?! The parenthesis around the statement after the return statement seem to be the answer! It appears to be a replacement for:
{ ...dev, dev.age: value }
*/
