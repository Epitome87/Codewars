# [Counter of Neighbor Ones](https://www.codewars.com/kata/56ec1e8492446a415e000b63)

## Description

**Task**

Transform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

**Example**

```
[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []
```

## My Solution

**JavaScript**

```js
const onesCounter = (input) => {
  const result = [];
  let numContinuous = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i]) numContinuous++;
    else {
      if (numContinuous > 0) result.push(numContinuous);
      numContinuous = 0;
    }
  }
  if (numContinuous > 0) result.push(numContinuous);
  return result;
};
```

### User Solution

**JavaScript**

```js
var onesCounter = ($) => ($.join('').match(/(1+)/g) || []).map((e) => e.length);
```

```js
const onesCounter = (inp) =>
  inp
    .join('')
    .split('0')
    .map((e) => e.length)
    .filter((e) => e);
```
