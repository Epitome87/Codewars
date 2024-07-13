# [Decompose a Number](https://www.codewars.com/kata/)

## Description

Decompose a number into an array (tuple in Haskell, array of arrays long[][] in C# or Java) in the form `[ [k1, k2, k3, ...], r ]` such that:

`num = 2k1 + 3k2 + 4k3 + ... + nkn-1 + r`

Where every ki > 1 and every ki is maximized (first maximizing for 2, then 3, and so on)

**Examples**

```
0   -->  [ [], 0 ]
3   -->  [ [], 3 ]        # because there is no `k` more than 1
26  -->  [ [4, 2], 1 ]    # 26 = 2^4 + 3^2 + 1
8330475  -->  [ [22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2], 0 ]
                          # 8330475 = 2^22 + 3^13 + 4^10 + ... + 22^2 + 23^2 + 24^2 + 0
```

## My Solution

**JavaScript**

```js
const decompose = (num) => {
  let arr = [];
  let k = 2;
  let power = 50;

  while (num > 0 && power !== 1) {
    if (num < Math.pow(k, power)) power--;
    else {
      num -= Math.pow(k++, power);
      arr.push(power);
    }
  }

  return [arr, num];
};
```

**Python**

```py
def decompose(num):
    lst = []
    k = 2
    power = 50

    while num > 0 and power != 1:
        if num < pow(k, power):
            power -= 1
        else:
            num -= pow(k, power)
            lst.append(power)
            k += 1

    return [lst, num]
```

### User Solution

**JavaScript**

```js
const decompose = (num, base = 2) => {
  const ki = (Math.log(num) / Math.log(base)) | 0;
  if (ki <= 1) return [[], num];

  const [arr, r] = decompose(num - base ** ki, ++base);
  return [[ki, ...arr], r];
};
```
