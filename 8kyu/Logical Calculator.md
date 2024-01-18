# [Logical Calculator](https://www.codewars.com/kata/57096af70dad013aa200007b)

## Description

**Your Task**

Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

**Examples**

1. booleans = [True, True, False], operator = "AND"

- True AND True -> True
- True AND False -> False
- return False

2. booleans = [True, True, False], operator = "OR"

- True OR True -> True
- True OR False -> True
- return True

3. booleans = [True, True, False], operator = "XOR"

- True XOR True -> False
- False XOR False -> False
- return False

**Input**

1. an array of Boolean values (1 <= array_length <= 50)
2. a string specifying a logical operator: "AND", "OR", "XOR"

**Output**

A Boolean value (True or False).

## My Solution

**JavaScript**

```js
const ops = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
};

const logicalCalc = (arr, op) => arr.reduce(ops[op]);
```

```js
const logicalCalc = (arr, op) =>
  arr.reduce((acc, cur) => (op === 'AND' ? acc && cur : op === 'OR' ? acc || cur : acc !== cur));
```

```js
const logicalCalc = (array, op) => {
  switch (op) {
    case 'AND':
      return array.reduce((acc, curr) => acc && curr);
    case 'OR':
      return array.reduce((acc, curr) => acc || curr);
    case 'XOR':
      return !!array.reduce((acc, curr) => acc ^ curr);
  }
};
```

**Python**

```py
def logical_calc(array, op):
    ops = { 'AND': lambda a, b: a & b, 'OR': lambda a, b: a | b, 'XOR': lambda a, b: a ^ b }
    return __import__('functools').reduce(ops[op], array)
```

```py
import functools

def logical_calc(array, op):
    ops = {
        'AND': lambda a, b: a and b,
        'OR': lambda a, b: a or b,
        'XOR': lambda a, b: a != b
    }

    return functools.reduce(ops[op], array)
```

### User Solution

**Python**

```py
def logical_calc(array, op):
    res = array[0]
    for x in array[1:]:
        if op == "AND":
            res &= x
        elif op == "OR":
            res |= x
        else:
            res ^= x

    return res #boolean
```
