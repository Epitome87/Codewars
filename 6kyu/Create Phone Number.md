# [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

## Description

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

**Example**

```js
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

## My Solution

**JavaScript**

```js
const createPhoneNumber = (numbers) => {
  const format = '(xxx) xxx-xxxx';
  for (let n of numbers) format = format.replace('x', n);
  return format;
};
```

```js
const createPhoneNumber = (number) => {
  const numStr = number.join('');
  return `(${numStr.substr(0, 3)}) ${numStr.substr(3, 3)}-${numStr.substr(6, 4)}`;
};
```

**Python**

```py
def create_phone_number(nums):
    format = '(xxx) xxx-xxxx'

    for n in nums:
        format = format.replace('x', str(n), 1)

    return format
```

### User Solution

**JavaScript**

```js
createPhoneNumber = (n) => '(###) ###-####'.replace(/#/g, () => n.shift());
```
