/*
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.
*/

// My solution:
const mostFrequentItemCount = (collection) => {
  const counts = collection.reduce((acc, curr) => {
    curr in acc ? (acc[curr] += 1) : (acc[curr] = 1);
    return acc;
  }, {});
  return Object.entries(counts).reduce((acc, curr) => (curr[1] > acc ? curr[1] : acc), 0);
};

// Top user solution:
function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;
  const count = {};
  collection.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });

  return Math.max(...Object.values(count));
}
