# [Simple Fun #6: Is Infinite Process?](https://www.codewars.com/kata/588431bb76933b84520000d3)

## Description

**Task**

Given integers a and b, determine whether the following pseudocode results in an infinite loop

```js
while (a !== b) {
  a++;
  b--;
}
```

Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

**Example**

For a = 2 and b = 6, the output should be

isInfiniteProcess(a, b) = false (or equivalent in PHP)

For a = 2 and b = 3, the output should be

isInfiniteProcess(a, b) = true (or equivalent in PHP)

**Input/Output**

- [input] integer a

Constraints: 0 ≤ a ≤ 100.

- [input] integer b

Constraints: 0 ≤ b ≤ 100.

- [output] a boolean value

true if the pseudocode will never stop, false otherwise.

## My Solution

**JavaScript**

```js
const isInfiniteProcess = (a, b) => a > b || (a - b) % 2 !== 0;
```
