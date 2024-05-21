# [Mutual Recursion](https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b)

## Description

Mutual Recursion allows us to take the fun of regular recursion (where a function calls itself until a terminating condition) and apply it to multiple functions calling each other!

Let's use the Hofstadter Female and Male sequences to demonstrate this technique. You'll want to create two functions F and M such that the following equations are true:

```js
F(0) = 1
M(0) = 0
F(n) = n - M(F(n - 1))
M(n) = n - F(M(n - 1))
```

Don't worry about negative numbers, n will always be greater than or equal to zero.

Hofstadter Wikipedia Reference http://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Female_and_Male_sequences

## My Solution

**JavaScript**

```js
const F = (n) => (n ? n - M(F(n - 1)) : 1);
const M = (n) => (n ? n - F(M(n - 1)) : 0);
```

```js
function F(n) {
  if (n <= 0) return 1;
  return n - M(F(n - 1));
}

function M(n) {
  if (n <= 0) return 0;
  return n - F(M(n - 1));
}
```

**Python**

```py
def f(n):
    return n - m(f(n - 1)) if n else 1

def m(n):
    return n - f(m(n - 1)) if n else 0
```
