# [Add a Property to an Object](https://www.codewars.com/kata/55f2c3dde50947271200006a)

## Description

Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

## My Solution

**JavaScript**

```js
const addProperty = (obj, prop, value) => {
  if (prop in obj) throw Error('Property already exists');
  else obj[prop] = value;
};
```