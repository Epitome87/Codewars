# [Simple Equation Reversal](https://www.codewars.com/kata/5aa3af22ba1bb5209f000037)

## Description

Given a mathematical equation that has \*,+,-,/, reverse it as follows:

```
solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
```

More examples in test cases.

## My Solution

**JavaScript**

```js
const solve = (eq) =>
  eq
    .split(/([*/+-])/)
    .reverse()
    .join('');
```

### User Solution

```js
// Even more clever user of Regex:
function solve(eq) {
  return eq.split(/\b/g).reverse().join('');
}
```

```js
// Not using Regex:
function solve(eq) {
  let op = ''; // operands eg. 100
  let result = '';

  //iterate over the String
  for (let c of eq) {
    //Detect if the char an Operator like +, - etc.
    if (c === '+' || c === '-' || c === '*' || c === '/') {
      result = c + op + result;
      op = '';
      continue;
    }

    //Build the Operand (e.g. 100 = 1+0+0)
    op = op + c;
  }

  //contact the last op and return
  return op + result;
}
```

```js
// Essentially what I did, but less concise:
function solve(eq) {
  return eq
    .split('/')
    .join(' / ')
    .split('+')
    .join(' + ')
    .split('*')
    .join(' * ')
    .split('-')
    .join(' - ')
    .split(' ')
    .reverse()
    .join('');
}
```
