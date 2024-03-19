# [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d)

## Description

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

## My Solution

**JavaScript**

```js
const fakeBin = (x) => x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
```

```js
const fakeBin = (x) => [...x].map((char) => (char < '5' ? '0' : '1')).join('');
```

**Python**

```py
def fake_bin(digits):
    return ''.join("0" if digit < "5" else "1" for digit in digits)
```

### User Solution

**Python**

```py
def fake_bin(x):
    translation = x.maketrans("123456789", "000011111")
    return x.translate(translation)
```
