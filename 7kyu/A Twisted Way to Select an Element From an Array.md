# [A Twisted Way to Select an Element From an Array](https://www.codewars.com/kata/5a1c84c1c374cb6f7e000104)

## Description

You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. Now, from arrSearch extract the third element, and from that element select the third letter. If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.

## My Solution

**JavaScript**

```js
const select = (arrSearch, arrTake) =>
  arrTake.find((el) => [...arrSearch].sort((a, b) => b.localeCompare(a))[2][2] === el[0]) || 'Nothing here';
```

```js
const select = (arrSearch, arrTake) => {
  const sorted = [...arrSearch].sort((a, b) => b.localeCompare(a));
  const thirdElement = sorted[2];
  const thirdLetter = thirdElement[2];
  const match = arrTake.find((el) => thirdLetter === el[0]);
  return match || 'Nothing here';
};
```