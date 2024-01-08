# [Basic Mathematical Operations](https://www.codewars.com/kata/57356c55867b9b7a60000bd7)

## Description

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

**Examples(Operator, value1, value2) --> output**

```
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
```

## My Solution

**JavaScript**

```js
const basicOp = (op, v1, v2) => ({ '+': v1 + v2, '-': v1 - v2, '*': v1 * v2, '/': v1 / v2 }[op]);
```

```js
const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '/':
      return value1 / value2;
    case '*':
      return value1 * value2;
  }
};
```

**TypeScript**

```ts
export const basicOp = (operation: '+' | '-' | '*' | '/', value1: number, value2: number): number => {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
};
```

**Python**

```py
def basic_op(operator, value1, value2):
    ops = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2
    }
    return ops[operator]
```

```py
def basic_op(operator, value1, value2):
    match operator:
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
```

```py
def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    if operator == "-":
        return value1 - value2
    if operator == "*":
        return value1 * value2
    if operator == "/":
        return value1 / value2
```

### User Solution

**JavaScript**

```js
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
```

**TypeScript**

```ts
const ops = {
  '+': (l, r) => l + r,
  '-': (l, r) => l - r,
  '*': (l, r) => l * r,
  '/': (l, r) => l / r,
};
export const basicOp = (operation: keyof typeof ops, value1: number, value2: number): number =>
  ops[operation](value1, value2);
```

**Python**

```py
def basic_op(operator, value1, value2):
    return eval(f'{value1}{operator}{value2}')
```

## Takeaways

1. Look into the `eval` function, but realize that it is highly frowned upon!
