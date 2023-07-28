# [Are Arrow Functions Odd?](https://www.codewars.com/kata/559f80b87fa8512e3e0000f5)

## Description

Time to test your basic knowledge in functions! Return the odds from a list:

```
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
```

## My Solution

**JavaScript**

```js
const odds = (values) => values.filter((n) => n % 2);
```

### User Solution

**JavaScript**

```js
function odds(values) {
  return values.filter((x) => x & 1);
}
```

## Takeaways

1. Learn bitwise operators!
