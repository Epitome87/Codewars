# [SevenAte9](https://www.codewars.com/kata/559f44187fa851efad000087)

## Description

Write a function that removes every lone 9 that is inbetween 7s.

```
"79712312" --> "7712312"
"79797"    --> "777"
```

## My Solution

**JavaScript**

```js
const sevenAte9 = (str) => str.replace(/79(?=7)/g, '7');
```

```js
const sevenAte9 = (str) => {
  while (str.includes('797')) {
    str = str.replace('797', '77');
  }

  return str;
};
```

### User Solution

**JavaScript**

```js
const sevenAte9 = (str) => str.replace(/(?<=7)9(?=7)/g, ``);
```
