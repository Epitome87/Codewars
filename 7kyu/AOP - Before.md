# [AOP - Before](https://www.codewars.com/kata/56948e24b510d4e1d3000022)

## Description

Aspect-oriented programming (AOP) is programming that adds additional behavior (advice) to existing functionality without actually modifying that functionality.

Create a method called adviseBefore. This method will take two arguments, a function (target) and the advising function (advice).

adviseBefore should return a function that, when executed, will first execute the advising function and then the original method with the following conditions:

- The arguments passed to the function that adviseBefore returns should be passed to the advising function.
- If the advising function returns an array, the array should replace the arguments passed to the original method.
- If the advising function does not return an array, the original arguments should be passed to the original method.
- The return value of the original method should be returned.

## My Solution

**JavaScript**

```js
const adviseBefore =
  (target, advice) =>
  (...args) => ((res = advice(...args)), Array.isArray(res) ? target(...res) : target(...args));
```

```js
const adviseBefore = (target, advice) => {
  return (...args) => {
    const res = advice(...args);
    if (Array.isArray(res)) return target(...res);
    else return target(...args);
  };
};
```