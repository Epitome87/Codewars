/*
Task
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

// My eh solution:
const leastLarger = (arr, index) => {
  const target = arr[index];
  let smallest = Number.MAX_VALUE;
  let smallestIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target && arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallest === target ? -1 : smallestIndex;
};

// Top user solution:
const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter((n) => n > a[i])));

// Another decent user solution:
function leastLarger(series, targetIndex) {
  const target = series[targetIndex];

  let leastLargeValue = Infinity;
  let leastLargeIndex = -1;

  for (const [index, number] of series.entries()) {
    if (number > target && number < leastLargeValue) {
      leastLargeValue = number;
      leastLargeIndex = index;
    }
  }

  return leastLargeIndex;
}

/* Takeaways:
1) Perhaps consider using the Infinity keyword over Number.MAX_VALUE?
2) Take note of how the third solution destructures index and number from series.entries().
*/
