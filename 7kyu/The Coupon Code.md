# [The Coupon Code](https://www.codewars.com/kata/539de388a540db7fec000642)

## Description

**Story**

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

**Task**

Your mission:

Write a function called `checkCoupon` which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: `"MONTH DATE, YEAR"`.

**Examples:**

```js
checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015') === true;
checkCoupon('123', '123', 'July 9, 2015', 'July 2, 2015') === false;
```

## My Solution

**JavaScript**

```js
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
  enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
```

```js
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
  const isCorrectCode = enteredCode === correctCode;
  const isExpiredCode = new Date(currentDate) > new Date(expirationDate);

  return isCorrectCode && !isExpiredCode;
};
```

```js
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}
```

**Python**

```py
from datetime import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    current = datetime.strptime(current_date, "%B %d, %Y")
    expiration = datetime.strptime(expiration_date, "%B %d, %Y")
    return type(entered_code) == str and entered_code == correct_code and current <= expiration
```

## Takeaways

1. If we don't need to reference a Date again, consider Date.parse() rather than new Date().
