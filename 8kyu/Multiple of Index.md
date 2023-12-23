# [Multiple of Index](https://www.codewars.com/kata/5a34b80155519e1a00000009)

## Description

Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:

```
[22, -6, 32, 82, 9, 25] => [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
```

## My Solution

**JavaScript**

```js
const multipleOfIndex = (array) => array.filter((n, idx) => n % idx === 0);
```

**Python**

```py
def multiple_of_index(arr):
    result = []
    for i in range(0, len(arr)):
        if (i == 0 and arr[i] == 0) or (i != 0 and arr[i] % i == 0):
            result.append(arr[i])
    return result
```

### User Solution

**Python**

```py
def multiple_of_index(arr):
    return [j for i,j in enumerate(arr) if (j==0 and i==0) or (i!=0 and j%i==0)]
```

```py
def multiple_of_index(arr):
    res = []
    if arr[0] == 0:
        res.append(arr[0])
    for i, x in enumerate(arr):
        if i > 0 and x%i == 0:
            res.append(x)
    return res
```
