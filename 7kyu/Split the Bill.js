/*
It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
The function should return an object/dict with the same names, showing how much money the members should pay or receive.
Further points:

The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.

Example
3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
    A: 20, 
    B: 15, 
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}
*/

// My second-attempt solution:
const splitTheBill = (x) => {
  const average = Object.values(x).reduce((sum, curr) => sum + curr, 0) / Object.entries(x).length;
  return Object.entries(x).reduce((acc, curr) => {
    acc[curr[0]] = +parseFloat(curr[1] - average).toFixed(2);
    return acc;
  }, {});
};

// My first-attempt solution:
const splitTheBill = (x) => {
  const billPerPerson = Object.values(x).reduce((acc, curr) => acc + curr, 0) / Object.values(x).length;

  const res = {};

  for (let person in x) {
    res[person] = parseFloat((x[person] - billPerPerson).toFixed(2));
  }

  return res;
};

// Clever user solution:
const splitTheBill = (x) => {
  let vals = Object.values(x),
    avg = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce((y, v) => ((y[v] = +(x[v] - avg).toFixed(2)), y), {});
};

// Good user solution:
function splitTheBill(x) {
  let average = Object.values(x).reduce((a, b) => a + b, 0) / Object.values(x).length;
  let arr = Object.keys(x);
  let arr2 = Object.values(x).map((a, b) => a - average);
  return Object.assign(...arr.map((n, i) => ({ [n]: parseFloat(arr2[i].toFixed(2)) })));
}

/* Takeaways:
1) Try to understand and make use of the Object.assign() method more often!
*/
