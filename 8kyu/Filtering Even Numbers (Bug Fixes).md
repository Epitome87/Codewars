# [Filtering Even Numbers (Bug Fixes)](https://www.codewars.com/kata/https://www.codewars.com/kata/566dc566f6ea9a14b500007b)

## Description

Fix the bug in Filtering method

The method is supposed to remove even numbers from the list and return a list that contains the odd numbers.

However, there is a bug in the method that needs to be resolved.

**Starting code**

```py
def kata_13_december(lst):
    # Fix this code
    for i in range(len(lst)):
        if lst[i]%2==0:
            lst.remove(i)
    return lst
```

## My Solution

**Python**

```py
def kata_13_december(lst):
    result = []
    for i in range(0, len(lst)):
        if lst[i] % 2:
            result.append(lst[i])
    return result
```

### User Solution

**Python**

```py
def kata_13_december(lst):
    return [item for item in lst if item & 1]
```

```py
def kata_13_december(lst):
    return [x for x in lst if x % 2]
```
