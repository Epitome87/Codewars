# [Say Me Please Operations](https://www.codewars.com/kata/5b5e0c0d83d64866bc00001d)

## Description

You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers.

Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"

The available operations are (in this order of preference):

```
1) addition
2) subtraction
3) multiplication
4) division
```

**Notes:**

- All input data is valid
- The number of numbers in the input string >= 3
- For a case like "2 2 4" - when multiple variants are possible - choose the first possible operation from the list (in this case "addition")
- Integer division should be used

**Example**

```
"9 4 5 20 25"  -->  "subtraction, multiplication, addition"
```

Because:

```
9 - 4 = 5   --> subtraction
4 * 5 = 20  --> multiplication
5 + 20 = 25 --> addition
```

## My Solution

**JavaScript**

```js
const sayMeOperations = (str) => {
  const operands = str.split(' ');
  const result = [];

  for (let i = 2; i < operands.length; i++) {
    const a = +operands[i - 2];
    const b = +operands[i - 1];
    const c = +operands[i];

    if (a + b === c) result.push('addition');
    else if (a - b === c) result.push('subtraction');
    else if (a * b === c) result.push('multiplication');
    else result.push('division');
  }

  return result.join(', ');
};
```
