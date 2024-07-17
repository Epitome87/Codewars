# [Filter Unused Digits](https://www.codewars.com/kata/55de6173a8fbe814ee000061)

## Description

Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

```
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
```

**Note:** the digits in the resulting string should be sorted.

## My Solution

**JavaScript**

```js
const unusedDigits = (...nums) => '0123456789'.replace(new RegExp(`[${nums.join('')}]`, 'g'), '');
```

```js
const unusedDigits = (...nums) => {
  const unusedSet = new Set(Array(10).keys());

  for (let digit of `${nums}`) unusedSet.delete(+digit);

  return [...unusedSet].join('');
};
```

```js
const unusedDigits = (...nums) => {
  const usedDigits = new Set(nums.toString().split(''));
  let res = '';

  for (let i = 0; i <= 9; i++) {
    if (!usedDigits.has(String(i))) res += i;
  }

  return res;
};
```

**Python**

```py
def unused_digits(*numbers):
    unused_set = set('0123456789')

    for number in numbers:
        for digit in str(number):
            unused_set.discard(digit)

    return ''.join(n for n in sorted(unused_set))
```

### User Solution

**JavaScript**

```js
const unusedDigits = (...arr) => {
  var digits = arr.join();

  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => !digits.includes(x)).join('');
};
```

**Python**

```py
def unused_digits(*args):
    return "".join(number for number in "0123456789" if number not in str(args))
```
