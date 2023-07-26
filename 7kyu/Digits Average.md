# [Digits Average](https://www.codewars.com/kata/5a32526ae1ce0ec0f10000b2)

## Description

Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)

**Examples**

```
digitsAverage(246)  ==>  4

original: 2   4   6
           \ / \ /
1st iter:   3   5
             \ /
2nd iter:     4


digitsAverage(89)  ==>  9

original: 8   9
           \ /
1st iter:   9
```

p.s. for a bigger challenge, check out the one line version of this kata by myjinxin2015!

## My Solution

**JavaScript**

```js
const digitsAverage = (input) => {
  let str = input.toString();
  while (str.length > 1) {
    const res = [];
    for (let i = 0; i < str.length - 1; i++) {
      res.push(Math.ceil((+str[i] + +str[i + 1]) / 2));
    }
    str = res.join('');
  }
  return +str;
};
```

### User Solution

**JavaScript**

```js
function digitsAverage(input) {
  let a = [...input.toString()].map(Number);
  const reduce = (a) => a.slice(1).map((n, i) => Math.ceil((n + a[i]) / 2));
  while (a.length > 1) {
    a = reduce(a);
  }
  return a[0];
}
```
