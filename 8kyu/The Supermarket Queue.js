/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

// My solution:
function queueTime(customers, n) {
  let tills = Array(n).fill(0);

  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });

  return Math.max(...tills);
}

// Top user solution, with comments!:
function queueTime(customers, n) {
  // creates an array of length n representing the tills
  // Each till is given a value of 0 to represent initial waitTime before the queue begins.
  const tills = new Array(n).fill(0);
  // goes through the queue of customer waitTimes
  for (let waitTime of customers) {
    // finds the till with the least wait time on it, adds the next customer's time to it
    const lowestWaitTill = tills.indexOf(Math.min(...tills));
    tills[lowestWaitTill] += waitTime;
  }
  // end result is that the waitTimes (load) on the tills are distributed optimally.
  // The waitTime of the till with the heaviest load represents the total time taken
  return Math.max(...tills);
}

/* Takeways:
1) This is a good Kata to study and remember!
*/
