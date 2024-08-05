# [Training JS #16: Methods of String Object - slice(), substring(), substr()](https://www.codewars.com/kata/57274562c8dcebe77e001012)

## Description

Coding in function `cutIt`, function accept 1 parameter: `arr`. `arr` is a string array.

The first mission: Traversing `arr`, find the shortest string length.

The second mission: Traversing `arr` again, intercept all strings to the shortest string length(Start from index 0). You can use one of `slice()`, `substring()` or `substr()` to do it. Return the result after finished the work.

For example:

```
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
```

## My Solution

**JavaScript**

```js
// Using slice
const cutIt = (arr) => {
  const shortest = Math.min(...arr.map((n) => n.length));
  return arr.map((n) => n.slice(0, shortest));
};
```

```js
// Using substring
const cutIt = (arr) => {
  const shortest = Math.min(...arr.map((n) => n.length));
  return arr.map((n) => n.substring(0, shortest));
};
```

```js
// Using substr
const cutIt = (arr) => {
  const shortest = Math.min(...arr.map((n) => n.length));
  return arr.map((n) => n.substr(0, shortest));
};
```
