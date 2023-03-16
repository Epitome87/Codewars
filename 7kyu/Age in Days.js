/*
Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"
The birthday is expected to be in the past.

Suggestions on how to improve the kata are welcome!
*/

// My solution:
const ageInDays = (year, month, day) => {
  const birthDate = new Date(year, month - 1, day);
  const deltaDays = Math.floor((Date.now() - birthDate) / 8.64e7);
  return `You are ${deltaDays} days old`;
};

// One-line user solution:
const ageInDays = (year, mon, day) =>
  `You are ${
    ((new Date() - new Date(year, --mon, day)) / 8.64e7) ^ 0
  } days old`;
