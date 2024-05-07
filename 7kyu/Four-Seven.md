# [Four/Seven](https://www.codewars.com/kata/5ff50f64c0afc50008861bf0)

## Description

Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.

Good Luck!

## My Solution

**JavaScript**

```js
const fourSeven = (n) => ({ 4: 7, 7: 4 }[n] || 0);
```

```js
const fourSeven = (n) => {
  const res = {
    4: 7,
    7: 4,
  };

  return res[n] || 0;
};
```

**Python**

```py
def solution(n):
    return { 4: 7, 7: 4 }.get(n, 0)
```

### User Solution

**JavaScript**

```js
function fourSeven(n) {
  return (n === 7 && 4) || (n === 4 && 7) || 0;
}
```

```js
function fourSeven(n) {
  while (n === 4) return 7;
  while (n === 7) return 4;
  return 0;
}
```
