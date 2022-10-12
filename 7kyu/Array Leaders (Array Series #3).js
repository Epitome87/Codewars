/*
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).
*/

// My solution:
const arrayLeaders = (nums) =>
  nums.filter(
    (n, i, arr) => n > arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0)
  );

// Top user solution:
var arrayLeaders = (numbers) => {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    //loop through array
    let sum = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      //start one position right of the main loop element
      sum += numbers[j]; //add all those numbers together
    }

    if (numbers[i] > sum) {
      //compare that sum to the initial number
      answer.push(numbers[i]); //if it's bigger push it to the answer array
    }
  }
  return answer; //return it like it's defective
};
