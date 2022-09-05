/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
 */

// My solution:
const unluckyDays = (year) => {
  let unluckyCount = 0;

  for (let month = 0; month < 12; month++) {
    if (new Date(year, month, 13).getDay() === 5) unluckyCount++;
  }

  return unluckyCount;
};

// Clever user solution:
function unluckyDays(year) {
  return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length;
}

/* Takeaways:
1) Learn more about Date object in JavaScript. Some things to note:
* The getDays() method returns an integer representation of the day of the week, where 0 represents Sunday.
*/
