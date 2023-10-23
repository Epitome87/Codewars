# [Check Your Arguments](https://www.codewars.com/kata/58dd98fe8d29b0f30d0002bd)

## Description

Bob has written a function to detect the type of an object. It receives any primitive values or objects, and returns its object type as a string. But it seems to be working incorrectly. Can you figure out why, and fix the code for him?

## My Solution

**JavaScript**

```js
function objectType(obj) {
  return Object.prototype.toString.call(arguments.length ? obj : null);
}
```

### User Solution

**JavaScript**

```js
const objectType = (...args) => Object.prototype.toString.call(...args, null);
```
