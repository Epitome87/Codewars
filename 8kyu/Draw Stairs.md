# [Draw Stairs](https://www.codewars.com/kata/5b4e779c578c6a898e0005c5)

## Description

Given a number `n`, draw stairs using the letter `"I"`, `n` tall and `n` wide, with the tallest in the top left.

For example `n = 3` result in:

    "I\n I\n  I"

or printed:

    I
     I
      I

Another example, a 7-step stairs should be drawn like this:

    I
     I
      I
       I
        I
         I
          I

## My Solution

**JavaScript**

```js
const drawStairs = (n) => Array.from({ length: n }, (_, i) => `${' '.repeat(i)}I`).join('\n');
```

```js
const drawStairs = (n) =>
  Array(n)
    .fill('I')
    .map((v, i) => v.padStart(i + 1, ' '))
    .join('\n');
```

**Python**

```py
def draw_stairs(n):
    return '\n'.join(' ' * i + 'I' for i in range(n))
```
