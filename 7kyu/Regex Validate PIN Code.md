# [Regex Validate PIN Code](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)

## Description

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)

```
"1234" --> true
"12345" --> false
"a234" --> false
```

## My Solution

**JavaScript**

```js
const validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin);
```

```js
const validatePIN = (pin) => {
  if (pin.length !== 4 && pin.length !== 6) return false;

  return pin.split('').every((digit) => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(digit));
};
```

**Python**

```py
import re

def validate_pin(pin):
    return re.fullmatch("\d{4}|\d{6}", pin) != None
```

### User Solution

**Python**

```py
# Clever, but doesn't use Regex
def validate_pin(pin):
    return len(pin) in (4, 6) and pin.isdigit()
```
