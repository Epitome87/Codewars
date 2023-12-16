# [Padding](https://www.codewars.com/kata/59bbf86d5fb133fab20000e4)

## Description

In not more than 24 characters, write a function named p that pads it input to both sides of itself and returns the result.

**Example**

1. p("e") //returns "eee"
2. p("e\n") //returns "e\ne\ne\n"

**Instruction**

1. Code should not the more than 24 characters
2. Character + and function repeat not allowed in the code.
3. Only a single . character allowed
4. Code must be on a single line
5. ${ character not allowed

## My Solution

**JavaScript**

```js
p = (s) => [s, s, s].join('');
```

### User Solution

**JavaScript**

```js
p = (e) => Array(4).join(e);
```
