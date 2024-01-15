# [Fix My Phone Numbers!](https://www.codewars.com/kata/596343a24489a8b2a00000a2)

## Description

Oh thank goodness you're here! The last intern has completely ruined everything!

All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!

**The Format**

Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

**The Task**

Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

## My Solution

**JavaScript**

```js
const isItANum = (str) => (str.replace(/\D/g, '').match(/^0\d{10}$/gi) || [])[0] || 'Not a phone number';
```

```js
const isItANum = (str) => {
  const correctedNum = str.replace(/[^0-9]/g, '');
  return correctedNum.length === 11 ? correctedNum : 'Not a phone number';
};
```

**Python**

```py
import re

def is_it_a_num(s: str) -> str:
    return (re.findall(r"^0\d{10}$", re.sub(r"\D", "", s)) or ["Not a phone number"])[0]
```

### User Solution

**Python**

```py
import re

def is_it_a_num(s):
    m = re.fullmatch(r"0\d{10}", re.sub(r"[^\d]", "", s))
    return m[0] if m else "Not a phone number"
```

## Takeaways

1. Remember, Python Regex methods tend to return a `Match` object. This allows us to both check whether a `fullmatch` was found _and_ to retrieve any potential matches by indexing into the returned match object! (Similarly, my choice of using the `findall` method worked as well.)
