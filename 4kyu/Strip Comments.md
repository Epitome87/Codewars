# [Strip Comments](https://www.codewars.com/kata/51c8e37cee245da6b40000bd)

## Description

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

```
apples, pears # and bananas
grapes
bananas !apples
```

The output expected would be:

```
apples, pears
grapes
bananas
```

The code would be called like so:

```js
var result = solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']);
// result should == "apples, pears\ngrapes\nbananas"
```

## My Solution

**JavaScript**

```js
const solution = (input, markers) => {
  const inputLines = input.split('\n');
  const result = [];

  for (let i = 0; i < inputLines.length; i++) {
    let line = inputLines[i];

    for (let marker of markers) {
      line = line.split(marker)[0];
    }

    result.push(line.trim());
  }

  return result.join('\n');
};
```

### User Solution

**JavaScript**

```js
function solution(input, markers) {
  return input
    .split('\n')
    .map((line) => markers.reduce((line, marker) => line.split(marker)[0].trim(), line))
    .join('\n');
}
```
