/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

// My eh solution:
const highestRank = (arr) => {
  const numMap = {};

  arr.forEach((num) => {
    if (numMap[num]) numMap[num] += 1;
    else numMap[num] = 1;
  });

  const topOccurence = Math.max(...Object.values(numMap));
  const res = [];

  for (let key in numMap) {
    if (numMap[key] === topOccurence) res.push(Number(key));
  }

  return res.sort((a, b) => b - a)[0];
};

// My other eh solution:
const highestRank = (arr) => {
  const numMap = arr.reduce((acc, curr) => {
    acc[curr] = 1 + (acc[curr] ? acc[curr] : 0);
    return acc;
  }, {});

  const topOccurence = Math.max(...Object.values(numMap));
  Number(
    Object.entries(numMap)
      .filter((n) => n[1] === topOccurence)
      .sort((a, b) => b[0].localeCompare(a[0]))[0][0]
  );
};

// Clever user solution:
const highestRank = (arr) =>
  arr.sort((a, b) => arr.filter((val) => val === b).length - arr.filter((val) => val === a).length || b - a)[0];

// Another good user solution:
const highestRank = (arr) => {
  let nums = {};
  arr.forEach((el) => {
    nums[el] ? nums[el]++ : (nums[el] = 1);
  });
  return +Object.keys(nums).reduce((a, b) => (nums[a] > nums[b] ? a : b));
};
