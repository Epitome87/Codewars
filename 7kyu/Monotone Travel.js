/*
Story
Peter lives on a hill, and he always moans about the way to his home. "It's always just up. I never get a rest". But you're pretty sure that at least at one point Peter's altitude doesn't rise, but fall. To get him, you use a nefarious plan: you attach an altimeter to his backpack and you read the data from his way back at the next day.

Task
You're given a list of compareable elements:

heights = [h1, h2, h3, …, hn]
Your job is to check whether for any x all successors are greater or equal to x.

isMonotone([1,2,3]) == true
isMonotone([1,1,2]) == true
isMonotone([1])     == true
isMonotone([3,2,1]) == false
isMonotone([3,2,2]) == false
If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:

isMonotone([])     == True
Such a sequence is also called monotone or monotonic sequence, hence the name isMonotone.
*/

// My straightforward solution:
const isMonotone = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};

// My one-line solution:
const isMonotone = (arr) => arr.slice(0, -1).every((n, idx) => n <= arr[idx + 1]);

// My one-liner solution, different take:
const isMonotone = (arr) => arr.slice(1).every((n, i) => arr[i] <= n);

// Top user solution:
var isMonotone = function (arr) {
  return arr.every(function (x, idx) {
    return idx === 0 ? true : arr[idx] >= arr[idx - 1];
  });
};

/* Takeaways:
1) When using array helper functions where we need to compare earlier or later indices, prefer slicing the final element off
and comparing index + 1, rather than slicing the first off and comparing index - 1. Or we can do what the top user solution did, and conditionally check if we are on index 0, in which case we skip logic that would access an out of bounds index. We can also slice the first item off, and compare the current item in the some callback function to arr[idx], which gives us the previous item in the non-sliced array!
*/
