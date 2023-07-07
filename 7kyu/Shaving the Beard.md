# [Shaving the Beard](https://www.codewars.com/kata/57efa1a2108d3f73f60000e9)

## Description

Today was a sad day. Having bought a new beard trimmer, I set it to the max setting and shaved away at my joyous beard. Stupidly, I hadn't checked just how long the max setting was, and now I look like Ive just started growing it!

Your task, given a beard represented as an arrayof arrays, is to trim the beard as follows:

```
['|', 'J', '|', '|'],
['|', '|', '|', 'J'],
['...', '...', '...', '...'];
```

To trim the beard use the following rules:

trim any curled hair --> replace 'J' with '|' trim any hair from the chin (last array) --> replace '|' or 'J' with '...'

All sub arrays will be same length. Return the corrected array of arrays

## My Solution

**JavaScript**

```js
const trim = (x) => {
  const result = [...x];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (i === result.length - 1) result[i][j] = '...';
      else if (result[i][j] === 'J') result[i][j] = '|';
    }
  }
  return result;
};
```

### User Solution

**JavaScript**

```js
function trim(x) {
  return x.map((a, i) =>
    i == x.length - 1 ? a.map((b) => b.replace(/J|\|/g, '...')) : a.map((b) => b.replace(/J/g, '|'))
  );
}
```
