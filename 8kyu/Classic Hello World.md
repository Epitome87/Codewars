# [Classic Hello World](https://www.codewars.com/kata/57036f007fd72e3b77000023)

## Description

You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything

Note that for some languages, the function main is the entry point of the program.

Here's how it will be tested:

```js
Solution.main('parameter1', 'parameter2');
```

Hints:

1. Check your references
2. Think about the scope of your method
3. For prolog you can use write but there are better ways
4. If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument, and that only prints "Hello World!" without any return.

## My solution

**JavaScript**

```js
class Solution {
  static main() {
    console.log('Hello World!');
  }
}
```

### User Solution

**JavaScript**

```js
Solution = {};
Solution.main = () => {
  console.log('Hello World!');
};
```
