# [Tricky Doubles](https://www.codewars.com/kata/56971747aa359bdbf800004d)

## Description

Create a function that returns twice the supplied value unless it is a tricky double.

The trick: if the number passed in is a double, simply return the value that was passed.

Examples of a double number include:

- 44
- 77
- 3333
- 8787
- 100100

In the example 8787, the number 87 is doubled (appears twice).

```js
trickyDoubles(15); // should return 30
trickyDoubles(100); // should return 200
trickyDoubles(4343); // should return 4343
```

## My Solution

**JavaScript**

```js
const trickyDoubles = (n) => (`${n}`.slice(0, `${n}`.length / 2) === `${n}`.slice(`${n}`.length / 2) ? n : 2 * n);
```

### User Solution

**JavaScript**

```js
const trickyDoubles = (n) => (/^(\d*)\1$/.test(n) ? n : n * 2);
```

```js
function trickyDoubles(n) {
  let s = n.toString(),
    sh = s.slice(s.length / 2);
  return sh + sh == s ? n : n * 2;
}
```
