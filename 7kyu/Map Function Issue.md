# [Map Function Issue](https://www.codewars.com/kata/560fbc2d636966b21e00009e)

## Description

In computer science, a programming language is said to have first-class functions if it treats functions as first-class citizens. Specifically, this means the language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures.

First-class functions are a necessity for the functional programming style, in which the use of higher-order functions is a standard practice. A simple example of a higher-ordered function is the map function, which takes, as its arguments, a function and a list, and returns the list formed by applying the function to each member of the list. For a language to support map, it must support passing a function as an argument. See more on https://en.wikipedia.org/wiki/First-class_function

Your task is to rewrite your own map function which takes :

- an array
- a predicate function func which returns true (boolean) with even arguments

For example :

```
map([1,2,3,4],func)

produces

[ false, true, false, true ]
```

The code also has to perform input validation, return :

- 'given argument is not a function' if func is not a function
- 'array should contain only numbers' if any elements are not numbers

## My Solution

**JavaScript**

```js
const func = (item) => !(item % 2);
const map = (arr, fn) =>
  typeof fn !== 'function'
    ? 'given argument is not a function'
    : arr.some(isNaN)
    ? 'array should contain only numbers'
    : arr.reduce((acc, cur) => [...acc, fn(cur)], []);
```
