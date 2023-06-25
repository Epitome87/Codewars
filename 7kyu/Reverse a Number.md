# [Reverse a Number](https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5)

# Description

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

**Examples**

```
 123 ->  321
-456 -> -654
1000 ->    1
```

## My Solution

**JavaScript**

```js
const reverseNumber = (n) => Math.sign(n) * parseInt([...n.toString()].reverse().join(''));
```

```js
const reverseNumber = (n) => {
  while (n >= 10 && n % 10 === 0) {
    n = n / 10;
  }

  const reversed = String(n)
    .split('')
    .reverse((a, b) => a - b)
    .join('');
  if (reversed.includes('-')) return +`-${reversed.replace('-', '')}`;
  return +reversed;
};
```

### User Solution

**JavaScript**

```js
reverseNumber = (n) => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('');
```

## Takeaways

1. You don't need to remove ending 0's if you're just going to convert the String to a Number anyway, duh!
2. Using `+` to convert a string to a number will not work after we reverse a negative number and form a string with it. That's because `+` does not know how to convert, say, '31-' to a number. `parseInt()`, however, does!
