# [Pluck Data from Wikipedia Lists](https://www.codewars.com/kata/55a98fbbe9760cf5af00003f)

## Description

Don't you just love Wikipedia lists?

In this Kata, you'll write a function that extracts pieces of data and stores them in an Array.

The function will accept two parameters:

1. data An Array of Objects
2. property A String representing the property from which to pluck data
3. An Array should be returned, containing the value extracted for each Object contained in the data Array.

## My Solution

**JavaScript**

```js
const pluck = (data, property) => data.map((x) => x[property]);
```