# [Is n Divisible by x and y?](https://www.codewars.com/kata/5545f109004975ea66000086)

## Description

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

**Examples:**

```
1. n = 3, x = 1, y = 3 => true because 3 is divisible by 1 and 3
2. n = 12, x = 2, y = 6 => true because 12 is divisible by 2 and 6
3. n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4. n = 12, x = 7, y = 5 => false because 12 is neither divisible by 7 nor 5
```

**For SQL**

```
-- You will be given a table 'kata' with columns 'id', 'n', 'x', and 'y'.
-- Return the 'id' and your result in a column named 'res' using a SELECT statement.
-- You DON'T need to create a function, that's for other languages.
```

## My Solution

**JavaScript**

```js
const isDivisible = (n, x, y) => !(n % x) && !(n % y);
```

```js
// More readable version:
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
```

```js
// Most concise solution (but needlessly unreadable):
const isDivisible = (n, x, y) => !(n % x || n % y);
```

**SQL**

```sql
SELECT id, (n % x = 0 AND n % y = 0) AS res FROM kata;
```

**Python**

```py
def is_divisible(n, x, y):
    return n % x == 0 and n % y == 0
```
