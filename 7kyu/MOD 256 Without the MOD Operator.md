# [MOD 256 Without the MOD Operator](https://www.codewars.com/kata/581e1d083a4820eb4f00004f)

## Description

The MOD-operator % (aka mod/modulus/remainder):

```
Returns the remainder of a division operation.
The sign of the result is the same as the sign of the first operand.
(Different behavior in Python!)
```

The short unbelievable mad story for this kata:
I wrote a program and needed the remainder of the division by 256. And then it happened: The "5"/"%"-Key did not react. It must be broken! So I needed a way to:

```
Calculate the remainder of the division by 256 without the %-operator.
```

Also here some examples:

```
Input 254  -> Result 254
Input 256  -> Result 0
Input 258  -> Result 2
Input -258 -> Result -2 (in Python: Result: 254!)
```

It is always expected the behavior of the MOD-Operator of the language!

The input number will always between -10000 and 10000.

For some languages the %-operator will be blocked. If it is not blocked and you know how to block it, tell me and I will include it.

## My Solution

**JavaScript**

```js
const mod256WithoutMod = (n) => Math.sign(n) * (Math.abs(n) - 256 * Math.floor(Math.abs(n) / 256));
```

```js
const mod256WithoutMod = (n) => (n < 0 ? n + 256 * Math.floor(n / -256) : n - 256 * Math.floor(n / 256));
```

### User Solution

**JavaScript**

```js
const mod256WithoutMod = (n) => Math.sign(n) * (Math.abs(n) & 255);
```

```js
function mod256WithoutMod(number) {
  if (number < 0) {
    return -mod256WithoutMod(-number);
  }
  return number & 255;
}
```

```js
function mod256WithoutMod(number) {
  const n = number & 255;
  return number * n < 0 ? n - 256 : n;
}
```

```js
function mod256WithoutMod(number) {
  while (number > 255) number -= 256;
  while (number < -255) number += 256;
  return number;
}
```
