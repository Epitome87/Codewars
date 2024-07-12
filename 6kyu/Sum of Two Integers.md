# [Sum of Two Integers](https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac)

## Description

**Task**

Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

**Notes**

- The numbers (a,b) may be positive , negative values or zeros .
- Returning value will be an integer .
- Javascript: the Array reduce methods are disabled, along with eval, require, and module.

**Input >> Output Examples**

```
1 - Add (5,19) ==> return (24)
2 - Add (-27,18) ==> return (-9)
3 - Add (-14,-16) ==> return (-30)
```

## My Solution

**JavaScript**

```js
const add = (x, y) => (y ? add(x ^ y, (x & y) << 1) : x);
```

```js
const add = (x, y) => {
  while (y !== 0) {
    let temp = (x & y) << 1;
    x = x ^ y;
    y = temp;
  }
  return x;
};
```
