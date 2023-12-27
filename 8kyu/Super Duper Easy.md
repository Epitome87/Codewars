# [Super Duper Easy](https://www.codewars.com/kata/55a5bfaa756cfede78000026)

## Description

Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

## My Solution

**JavaScript**

```js
const problem = (x) => (typeof x === 'string' ? 'Error' : x * 50 + 6);
```

**Python**

```py
def problem(a):
    return 'Error' if isinstance(a, str) else a * 50 + 6
```

### User Solution

**Python**

```py
def problem(a):
    try:
        return a * 50 + 6
    except TypeError:
        return "Error"
```

```py
def problem(a):
    return "Error" if a == str(a) else a * 50 + 6
```
