/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

// My solution:
const isToday = (date) => new Date().toDateString() === date.toDateString();

// Alternative user solution:
function isToday(date) {
  let now = new Date();
  return now.getDate() == date.getDate() && now.getYear() == date.getYear() && now.getMonth() == date.getMonth();
}

/* Takeaways:
1) Calling two .toDateString() methods Date objects is an easy way to see if they're the same date.
*/
