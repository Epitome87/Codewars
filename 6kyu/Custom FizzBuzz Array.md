# [Custom FizzBuzz Array](https://www.codewars.com/kata/5355a811a93a501adf000ab7)

## Description

Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

The function should be able to take up to 4 arguments:

- The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
- The 3rd and 4th arguments are integers, 3 and 5 by default.

Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

```
[ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
```

When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

```
('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
```

**Examples**

```
fizzBuzzCustom()[15]                         // returns 16
fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
fizzBuzzCustom('Hey', 'There')[25]         // returns 26
fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)
```

## My Solution

**JavaScript**

```js
const fizzBuzzCustom = (stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) => {
  return Array.from({ length: 100 }, (_, i) => {
    return ++i % (numOne * numTwo) === 0
      ? stringOne + stringTwo
      : !(i % numOne)
      ? stringOne
      : !(i % numTwo)
      ? stringTwo
      : i;
  });
};
```

**Python**

```py
def fizz_buzz_custom(string_one = 'Fizz', string_two = 'Buzz', num_one = 3, num_two = 5):
    return [string_one + string_two if (i % (num_one * num_two) == 0)
            else string_one if i % num_one == 0
            else string_two if i % num_two == 0
            else i for i in range(1, 101)]
```
