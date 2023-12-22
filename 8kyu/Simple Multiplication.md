# [Simple Multiplication](https://www.codewars.com/kata/583710ccaa6717322c000105)

## Description

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

## My Solution

**JavaScript**

```js
const simpleMultiplication = (number) => number * (8 + (number % 2));
```

```js
const simpleMultiplication = (number) => number * (number % 2 ? 9 : 8);
```

```js
const simpleMultiplication = (number) => (number % 2 ? number * 9 : number * 8);
```

**Python**

```py
def simple_multiplication(number) :
    return number * (9 if number % 2 else 8)
```

```py
def simple_multiplication(number) :
    return number * 9 if number % 2 else number * 8
```
