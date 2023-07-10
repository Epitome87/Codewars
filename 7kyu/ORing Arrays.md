# [ORing Arrays](https://www.codewars.com/kata/5ac5e9aa3853da25d9000102)

## Description

It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the idea was cool enough for a beginner kata: binary OR each matching element of two given arrays (or lists, if you do it in Python; vectors in c++) of integers and give the resulting ORed array [starts to sound like a tonguetwister, doesn't it?].

If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

For example:

```js
orArrays([1, 2, 3], [1, 2, 3]) === [1, 2, 3];
orArrays([1, 2, 3], [4, 5, 6]) === [5, 7, 7];
orArrays([1, 2, 3], [1, 2]) === [1, 2, 3];
orArrays([1, 2], [1, 2, 3]) === [1, 2, 3];
orArrays([1, 2, 3], [1, 2, 3], 3) === [1, 2, 3];
```

## My Solution

**JavaScript**

```js
const orArrays = (arr1, arr2, n = 0) => {
  const result = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    result.push((arr1[i] === undefined ? n : arr1[i]) | (arr2[i] === undefined ? n : arr2[i]));
  }
  return result;
};
```

### User Solution

**JavaScript**

```js
function orArrays(a, b, c = 0) {
  return a.map((x, i) => x | (b[i] || c)).concat(b.slice(a.length).map((x) => x | c));
}
```

```js
let orArrays = (a1, a2, x) =>
  a1.map((i, ind) => (ind in a2 ? a2[ind] : x) | i).concat(a2.slice(a1.length).map((i) => i | x));
```
