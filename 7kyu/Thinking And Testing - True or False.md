# [Thinking & Testing: True or False](https://www.codewars.com/kata/56d931ecc443d475d5000003)

## Description

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

## My Solution

**JavaScript**

```js
const testit = (n) => n.toString(2).split('1').length - 1;
```

### User Solution

**JavaScript**

```js
const testit = (n) => n.toString(2).replace(/0/g, '').length;
```
