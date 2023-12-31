# [Power](https://www.codewars.com/kata/562926c855ca9fdc4800005b)

## Description

The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples

```js
numberToPower(3, 2); // -> 9 ( = 3 _ 3 )
numberToPower(2, 3); // -> 8 ( = 2 _ 2 _ 2 )
numberToPower(10, 6); // -> 1000000
```

Note: M`ath.pow` and some other Math functions like `eval()` and `*` are disabled.

## My Solution

**JavaScript**

```js
const numberToPower = (number, power) =>
  Array.from({ length: power }, (v, i) => number).reduce((acc, curr) => acc * curr, 1);
```

**Python**

```py
def number_to_pwr(number, p):
    result = 1
    for in in range(p):
      result *= number
    return result
```

```py
def number_to_pwr(number, p):
    result = 1
    while p:
        result *= number
        p -= 1
    return result
```

### User Solution

**JavaScript**

```js
const numberToPower = (number, power) => (power > 0 ? number * numberToPower(number, power - 1) : 1);
```

**Python**

```py
def number_to_pwr(number, p):
    return 1 if p == 0 else number * number_to_pwr(number, p-1)
```
