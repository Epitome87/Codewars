# [What Is Between?](https://www.codewars.com/kata/55ecd718f46fba02e5000029)

## Description

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

```
a = 1
b = 4
--> [1, 2, 3, 4]
```

## My Solution

**JavaScript**

```js
const between = (a, b) => [...Array(b - a + 1)].map((_, i) => a + i);
```

```js
const between = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => i + a);
```

**Python**

```py
def between(a,b):
    result = []
    for i in range(a, b + 1):
        result.append(i)
    return result
```

### User Solution

**JavaScript**

```js
function between(a, b) {
  return [...Array(b - a + 1).keys()].map((num) => num + a);
}
```

**Python**

```py
def between(a,b):
    return list(range(a,b+1))
```

```py
def between(a,b):
    return [result for result in range(a,b+1)]
```
