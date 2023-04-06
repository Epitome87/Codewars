/*
There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

Weekday

Number of trees that must be sprayed on that day

Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

Let cost of all liquid be x

Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

For example:

task('Monday', 15, 2) -> 'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
*/

// My one-line solution:
const task = (weekday, numTrees, cost) =>
  `It is ${weekday} today, ${
    { Monday: 'James', Tuesday: 'John', Wednesday: 'Robert', Thursday: 'Michael', Friday: 'William' }[weekday]
  }, you have to work, you must spray ${numTrees} trees and you need ${cost * numTrees} dollars to buy liquid`;

// My more-readable solution:
const task = (weekday, numTrees, costPerTree) => {
  const names = { Monday: 'James', Tuesday: 'John', Wednesday: 'Robert', Thursday: 'Michael', Friday: 'William' };
  const totalCost = costPerTree * numTrees;
  return `It is ${weekday} today, ${names[weekday]}, you have to work, you must spray ${numTrees} trees and you need ${totalCost} dollars to buy liquid`;
};
