# [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

## Description

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

## My Solution

**JavaScript**

```js
const evenOrOdd = (number) => (number % 2 ? 'Odd' : 'Even');
```

```js
const evenOrOdd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');
```

**Python**

```py
def even_or_odd:
    return 'Odd' if number % 2 else 'Even'
```

```py
def even_or_odd(number):
    if number % 2:
        return 'Odd'
    return 'Even'
```
