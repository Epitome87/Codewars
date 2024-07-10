# [Largest 5 Digit Number in a Series](https://www.codewars.com/kata/51675d17e0c1bed195000001)

## Description

In the following 6 digit number:

```
283910
```

`91` is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

```
1234567890
```

`67890` is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

## My Solution

**JavaScript**

```js
const solution = (digits) => [...digits].reduce((acc, cur, i) => Math.max(acc, digits.slice(i, i + 5)), 0);
```

```js
const solution = (digits) => {
  let result = 0;

  for (let i = 0; i < digits.length - 4; i++) result = Math.max(result, +digits.slice(i, i + 5));

  return result;
};
```

**Python**

```py
def solution(digits):
    result = 0

    for i in range(0, len(digits) - 4):
        result = max(result, int(digits[i:i + 5]))

    return result
```
