# [Simple Calculator](https://www.codewars.com/kata/5810085c533d69f4980001cf)

## Description

You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:  
The first and second argument should be numbers.  
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

**Example:**

```js
calculator(1, 2, '+'); //=> result will be 3
calculator(1, 2, '&'); //=> result will be "unknown value"
calculator(1, 'k', '*'); //=> result will be "unknown value"
```

## My Solution

**JavaScript**

```js
const calculator = (a, b, op) => {
  if (typeof (a && b) == undefined) return 'unknown value';

  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return 'unknown value';
  }
};
```

**Python**

```py
def calculator(x, y, op):
    if not isinstance(x, int) or not isinstance(y, int): return 'unknown value'
    match op:
        case '+': return x + y
        case '-': return x - y
        case '*': return x * y
        case '/': return x / y
        case _: return 'unknown value'
```

### User Solution

```js
function calculator(a, b, sign) {
  try {
    return eval(a + sign + b);
  } catch (e) {
    return 'unknown value';
  }
}
```

## Takeaways

1. Avoid the `eval()` function except for use in challenges. Using it elsewhere
   poses a security risk, according to MDN. Basically, eval() accepts a string and executes that as if it were an expression, statement, or sequences of statements. Can include variables and properties of existing objects.
