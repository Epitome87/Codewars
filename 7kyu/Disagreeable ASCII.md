# [Disagreeable ASCII](https://www.codewars.com/kata/582cb3a637c5583f2200005d)

## Description

You would like to get the 'weight' of a name by getting the sum of the ascii values. However you believe that capital letters should be worth more than mere lowercase letters. Spaces, numbers, or any other character are worth 0.

Normally in ascii

```
a has a value of 97
A has a value of 65
' ' has a value of 32
0 has a value of 48
```

To find who has the 'weightier' name you will switch all the values so:

```
A will be 97
a will be 65
' ' will be 0
0 will be 0
etc...
```

For example Joe will have a weight of 254, instead of 286 using normal ascii values.

## My Solution

**JavaScript**

```js
const getWeight = (name) =>
  [...name].reduce(
    (acc, cur) => acc + (/[a-z]/.test(cur) ? cur.charCodeAt(0) - 32 : /[A-Z]/.test(cur) ? cur.charCodeAt(0) + 32 : 0),
    0
  );
```

```js
const getWeight = (name) => {
  return [...name].reduce((acc, cur) => {
    let val = 0;
    if (/[a-z]/.test(cur)) val = cur.charCodeAt(0) - 32;
    else if (/[A-Z]/.test(cur)) val = cur.charCodeAt(0) + 32;
    return acc + val;
  }, 0);
};
```

### User Solution

**JavaScript**

```js
const getWeight = (name) =>
  [...name.replace(/[^a-z]/gi, '')].reduce((s, c) => s + c.charCodeAt(0) + (c < 'a' ? 32 : -32), 0);
```
