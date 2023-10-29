# [Sum the Strings: Array Edition](https://www.codewars.com/kata/5966ffb962d030e11a00005a)

## Description

Create a function that takes 2 arrays of 5 string numbers each, and outputs the sum of the corresponding elements as strings as well.

```js
sumArr(['4', '5', '6', '7', '8'], ['1', '2', '3', '4', '5']); // => ['5','7','9','11','13']
sumArr(['34', '5', '200', '17', '6'], ['27', '24', '14', '90', '16']); // => ['61','29','214','107','22']
```

If any input is an empty string, it should return the number that isn't just an empty string. If both corresponding elements are empty, output "0".

HINT: Remember Number()/parseInt() from https://www.codewars.com/kata/5966e33c4e686b508700002d

## My Solution

**JavaScript**

```js
const sumArr = (a, b) => a.reduce((acc, cur, idx) => [...acc, `${+cur + +b[idx]}`], []);
```

```js
const sumArr = (a, b) => {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    result.push(`${+a[i] + +b[i]}`);
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
function sumArr(a, b) {
  return a.map((x, i) => String(Number(x) + Number(b[i])));
}
```
