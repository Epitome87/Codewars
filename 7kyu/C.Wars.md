# [C.Wars](https://www.codewars.com/kata/55968ab32cf633c3f8000008)

## Description

Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

```
initials('code wars') => returns C.Wars
initials('Barack Hussain obama') => returns B.H.Obama
```

Complete the function initials.

Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

## My Solution

**JavaScript**

```js
const initials = (n) =>
  n
    .split(' ')
    .map((el, idx, arr) => `${el[0].toUpperCase()}${idx < arr.length - 1 ? '' : el.slice(1)}`)
    .join('.');
```

### User Solution

**JavaScript**

```js
const initials = (str) => str.replace(/\b\w/gi, (m) => m.toUpperCase()).replace(/\w+\s/gi, (m) => m[0] + '.');
```
