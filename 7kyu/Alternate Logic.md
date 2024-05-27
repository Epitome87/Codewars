# [Alternate Logic](https://www.codewars.com/kata/58f625e20290fb29c3000056)

## Description

Create an OR function that takes a list of boolean values and runs OR against all of them, without ( depending on language ) the `or` keyword or the `||` operator,.

There will be between 0 and 6 elements (inclusive).
Return `None`, `nil` or a similar empty value for an empty list.

## My Solution

**JavaScript**

```js
const alternate = (items) => (items.length ? items.some((v) => v) : null);
```

**Python**

```py
def alt_or(lst):
    return True in lst if lst else None
```
