# [Switch/Case - Bug Fixing #6](https://www.codewars.com/kata/55c933c115a8c426ac000082)

## Description

Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

**Starting (bugged) JavaScript code:**

```js
function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case '+':
      result = value.a + value.b;
    case '-':
      result = value.a - value.b;
    case '/':
      result = value.a / value.b;
    case '*':
      result = value.a * value.b;
    case '%':
      result = value.a % value.b;
    case '^':
      result = Math.pow(value.a, value.b);
  }
  return result;
}
```

**Starting (bugged) Python code:**

```py
def eval_object(v):
    match "operation":
        case "+":
            return v["a"] + v["b"]
        case "-":
            return v["a"] - v["b"]
        case "/":
            return v["a"] / v["b"]
        case "*":
            return v["a"] * v["b"]
        case "%":
            return v["a"] % v["b"]
        case "**":
            return v["a"] ** v["b"]
        case _:
            return 1
```

## My Solution

**JavaScript**

```js
const evalObject = (value) => {
  switch (value.operation) {
    case '+':
      return value.a + value.b;
    case '-':
      return value.a - value.b;
    case '/':
      return value.a / value.b;
    case '*':
      return value.a * value.b;
    case '%':
      return value.a % value.b;
    case '^':
      return Math.pow(value.a, value.b);
  }
};
```

```js
const evalObject = (value) => {
  let result = 0;

  switch (value.operation) {
    case '+':
      result = value.a + value.b;
      break;
    case '-':
      result = value.a - value.b;
      break;
    case '/':
      result = value.a / value.b;
      break;
    case '*':
      result = value.a * value.b;
      break;
    case '%':
      result = value.a % value.b;
      break;
    case '^':
      result = Math.pow(value.a, value.b);
  }
  return result;
};
```

**Python**

```py
def eval_object(v):
    match v["operation"]:
        case "+":
            return v["a"] + v["b"]
        case "-":
            return v["a"] - v["b"]
        case "/":
            return v["a"] / v["b"]
        case "*":
            return v["a"] * v["b"]
        case "%":
            return v["a"] % v["b"]
        case "**":
            return v["a"] ** v["b"]
        case _:
            return 1
```
