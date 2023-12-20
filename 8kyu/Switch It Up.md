# [Switch It Up!](https://www.codewars.com/kata/5808dcb8f0ed42ae34000031)

## Description

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

## My Solution

**JavaScript**

```js
const switchItUp = (n) => ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][n];
```

```js
const numberPairs = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
};

const switchItUp = (number) => numberPairs[number];
```

**Python**

```py
def switch_it_up(number):
    return ('Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine')[number]
```
