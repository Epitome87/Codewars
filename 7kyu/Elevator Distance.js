/*
Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.
*/

// My solution:
const elevatorDistance = (arr) => arr.slice(1).reduce((acc, curr, idx) => acc + Math.abs(arr[idx] - curr), 0);

/* Takeaways:
1) Since it's a fairly common pattern to compare the previous index with the current, remember: Slice the array to exclude the first element, then do reduce/map/etc and run logic comparing the current element to array[index], which now represents the previous index in the non-sliced array.
*/
