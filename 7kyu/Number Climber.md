# [Number Climber](https://www.codewars.com/kata/559760bae64c31556c00006b)

## Description

For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

For example, given N = 13, the sequence is \[1, 3, 6, 13\], because . . . :

     3 =  2*1 +1
     6 =  2*3
     13 = 2*6 +1

Write a function that returns this sequence given a number N. Try generating the elements of the resulting list in ascending order, i.e., without resorting to a list reversal or prepending the elements to a list.

## My Solution

**JavaScript**

```js
const climb = (n) => (n === 1 ? [n] : climb(Math.floor(n / 2)).concat(n));
```

```js
const climb = (n) => {
  const result = [n];

  while (n > 1) {
    n = Math.floor(n / 2);
    result.push(n);
  }

  return result.reverse();
};
```

**Python**

```py
def climb(n):
    return [n] if n == 1 else climb(n // 2) + [n]
```

### User Solution

**JavaScript**

```js
const climb = (n) => (!n ? [] : [...climb(n >> 1), n]);
```

```js
const climb = (n) => [...n.toString(2)].map((_, idx, arr) => n >> (arr.length - ++idx));
```
