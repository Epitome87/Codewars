/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

// My eh solution:
// function eachCons(array, n) {
//   const res = [];
//   let c = 0;
//   while (array[c] !== undefined) {
//     let subArr = [];
//     for (let i = c; i < n + c; i++) {
//       if (array[i] === undefined) return res;
//       subArr.push(array[i]);
//     }
//     c++;
//     res.push(subArr);
//   }

//   return res;
// }

// My eh solution:
const eachCons = (arr, n) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const subArr = [];
    for (let j = 0; j < n; j++) {
      let index = i + j;
      if (index >= arr.length) return res;
      subArr.push(arr[index]);
    }
    res.push(subArr);
  }
  return res;
};

// Top user solution:
function eachCons(array, n) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    res.push(array.slice(i, i + n));
  }

  return res.filter((e) => e.length === n);
}
