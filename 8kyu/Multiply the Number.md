# [Multiply the Number](https://www.codewars.com/kata/5708f682c69b48047b000e07)

## Description

Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

```js
multiply(3) == 15; // 3 * 5¹
multiply(10) == 250; // 10 * 5²
multiply(200) == 25000; // 200 * 5³
multiply(0) == 0; // 0 * 5¹
multiply(-3) == -15; // -3 * 5¹
```

## My Solution

**JavaScript**

```js
const multiply = (num) => num * 5 ** `${Math.abs(num)}`.length;
```

```js
const multiply = (number) => number * Math.pow(5, number > 0 ? number.toString().length : number.toString().length - 1);
```

**Python**

```py
def multiply(n):
    return n * 5 ** len(str(abs(n)))
```
