/*
Suzuki has a long list of chores required to keep the monastery in good order. Each chore can be completed independently of the others and assigned to any student. Knowing there will always be an even number of chores and that the number of students isn't limited, Suzuki needs to assign two chores to each student in a way which minimizes the total duration of the day's work.

For example, with the list of chores [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9], he'll need 6 students whose total workload will be: [7, 8, 8, 10, 10, 11] (as for [5+2, 4+4, 6+2, 8+2, 1+9, 9+2]). In this case, the maximal workload is minimized to 11 (=9+2. Keep in mind two chores must be assigned to each student involved).

Input/output
Input: 10 ≤ chores length ≤ 30, chores length is always even.
Output: array of workloads, in ascending order.
*/

// My solution:
const choreAssignment = (chores) => {
  const res = [];
  const sortedChores = [...chores].sort((a, b) => a - b);
  for (let i = 0; i < chores.length / 2; i++) {
    res.push(sortedChores[i] + sortedChores[chores.length - i - 1]);
  }
  return res.sort((a, b) => a - b);
};

// Top user solution:
function choreAssignment(chores) {
  var result = [];
  chores.sort((a, b) => a - b);
  while (chores.length) {
    result.push(chores.pop() + chores.shift());
  }
  return result.sort((a, b) => a - b);
}

/* Takeaways:
1) For algorithms where we have to use elements at opposite ends of an array,
rather than addressing them as arr[i] and arr[arr.length - 1 - i], consider using
arr.shift() followed by arr.pop().
*/
