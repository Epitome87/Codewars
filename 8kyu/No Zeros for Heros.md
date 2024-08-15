# [No Zeros for Heros](https://www.codewars.com/kata/570a6a46455d08ff8d001002)

## Description

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

```
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
```

Zero alone is fine, don't worry about it. Poor guy anyway

## My Solution

**JavaScript**

```js
const noBoringZeros = (n) => Number(n.toString().replace(/0+$/, ''));
```

```js
const noBoringZeros = (n) => +`${n}`.replace(/0+$/, '');
```

```js
const noBoringZeros = (n) => {
  // While n ends in 0, and not equal to 0
  while (n % 10 === 0 && n != 0) {
    // Divide by 10, thus removing the zero
    n /= 10;
  }
  return n;
};
```

**Python**

```py
def no_boring_zeros(n):
    return int(str(n).rstrip('0')) if n else 0
```
