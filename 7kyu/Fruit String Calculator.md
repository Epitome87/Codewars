# [Fruit String Calculator](https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3)

## Description

You are given a string of words and numbers. Extract the expression including:

1. the operator: either addition ("gains") or subtraction ("loses")
2. the two numbers that we are operating on

Return the result of the calculation.

Notes:

- "loses" and "gains" are the only two words describing operators
- No fruit debts nor bitten apples = The numbers are integers and no negatives

**Examples**

```
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
```

## My Solution

**JavaScript**

```js
function calculate(str) {
  let [op1, op2] = str.match(/\d+/gm);
  return /loses/.test(str) ? +op1 - +op2 : +op1 + +op2;
}
```

```js
const calculate = (string) => {
  const wordArray = string.split(' ');
  const [first, op, second] = [+wordArray[2], wordArray[5], +wordArray[6]];
  return first + (op === 'gains' ? second : -second);
};
```

**Python**

```py
import re

def calculate(string):
    a, b = re.findall(r"\d+", string)
    return int(a) + (int(b) if re.search(r"gains", string) else  -int(b))
```

### User Solution

**Python**

```py
# Doesn't use Regex, though!
def calculate(s):
    x = [int(i) for i in s.split() if i.isdigit()]
    return sum(x) if 'gains' in s else x[0] - x[1]
```
