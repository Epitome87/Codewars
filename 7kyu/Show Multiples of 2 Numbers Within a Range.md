# [Show Multiples of 2 Numbers Within a Range](https://www.codewars.com/kata/583989556754d6f4c700018e)

## Description

Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

1. Do NOT worry about checking zeros or negative values.
2. To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation

## My Solution

**JavaScript**

```js
const multiples = (s1, s2, s3) => {
  const res = [];
  for (let i = s1; i < s3; i += s1) {
    if (i % s2 === 0) res.push(i);
  }
  return res;
};
```

**Python**

```py
def multiples(s1, s2, s3):
    return [x for x in range(s1, s3, s1) if not (x % s1 or x % s2)]
```

### User Solution

**JavaScript**

```js
const multiples = (s1, s2, s3) =>
  [...Array(s3 - s1)]
    .map((_, idx) => idx + s1)
    .filter((val) => !(val % s1 || val % s2));
```