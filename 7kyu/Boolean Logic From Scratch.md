# [Boolean Logic From Scratch](https://www.codewars.com/kata/584d2c19766c2b2f6a00004f)

## Description

**Task**

You need to implement two functions, xor and or, that replicate the behaviour of their respective operators:

- xor = Takes 2 values and returns true if, and only if, one of them is truthy.
- or = Takes 2 values and returns true if either one of them is truthy.

When doing so, you cannot use the or operator: ||.

**Input**

- Not all input will be booleans - there will be truthy and falsey values [the latter including also empty strings and empty arrays]
- There will always be 2 values provided

**Examples**

- xor(true, true) should return false
- xor(false, true) should return true
- or(true, false) should return true
- or(false, false) should return false

## My Solution

**JavaScript**

```js
const or = (a, b) => (a ? true : b ? true : false);
const xor = (a, b) => !!a !== !!b;
```

### User Solution

**JavaScript**

```js
const or = (a, b) => (a ? true : !!b);
const xor = (a, b) => (a ? !b : !!b);
```

```js
const or = (a, b) => !!a + !!b != 0;
const xor = (a, b) => !!a + !!b == 1;
```
