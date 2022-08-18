/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

// My one-liner solution:
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
  enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);

// My straightforward solution:
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  const isCorrectCode = enteredCode === correctCode;
  const isExpiredCode = new Date(currentDate) > new Date(expirationDate);

  return isCorrectCode && !isExpiredCode;
};

// Top user solution:
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}

/* Takeways:
1) If we don't need to reference a Date again, consider Date.parse() rather than new Date().
*/
