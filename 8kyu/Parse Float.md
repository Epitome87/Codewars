# [Parse Float](https://www.codewars.com/kata/57a386117cb1f31890000039)

## Description

Write function `parseF` which takes an input and returns a number or `null` if conversion is not possible. The input can be one of many different types so be aware.

## My Solution

**JavaScript**

```js
const parseF = (s) => (parseFloat(s) === +s ? parseFloat(s) : null);
```

```js
const parseF = (s) => (isNaN(parseFloat(s)) ? null : parseFloat(s));
```

**Python**

```py
def parse_float(string):
    try:
        return float(string)
    except:
        return None
```

## Takeaways

1. Instead of using `isNaN(num)`, we can see if `parseFloat(num) === +num`
