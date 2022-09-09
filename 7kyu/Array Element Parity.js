// My solution:
const solve = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(arr[i]) || !arr.includes(-arr[i])) return arr[i];
  }
};

// Top user solution:
const solve = (a) => a.find((e) => !a.includes(-e));

// Another good user solution:
const solve = (array) => array.find((value) => !array.includes(-value));

// My pick for most clever user solution:
const solve = (arr) => [...new Set(arr)].reduce((a, c) => a + c);
