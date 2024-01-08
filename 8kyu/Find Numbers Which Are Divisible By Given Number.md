# [Find Numbers Which Are Divisible By Given Number](https://www.codewars.com/kata/55edaba99da3a9c84000003b)

## Description

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)

```
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
```

## My Solution

**JavaScript**

```js
const divisibleBy = (numbers, divisor) => numbers.filter((n) => n % divisor === 0);
```

**Python**

```py
def divisible_by(numbers, divisor):
    return [n for n in numbers if n % divisor == 0]
```

### User Solution

**Python**

```py
def divisible_by(numbers, divisor):
    return list(filter(lambda x: x%divisor == 0, numbers))
```
