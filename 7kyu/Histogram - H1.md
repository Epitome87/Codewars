# [Histogram - H1](https://www.codewars.com/kata/57d532d2164a67cded0001c7)

## Description

**Background**

A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.

Example:

```
6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
```

**Task**

You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

**Notes**

- There are no trailing spaces on the lines
- All lines (including the last) end with a newline \n
- A count is displayed beside each bar except where the count is 0
- The number of rolls may vary but there are never more than 100

## My Solution

**JavaScript**

```js
const histogram = (results) =>
  results.reduce((acc, curr, idx) => `${idx + 1}|${'#'.repeat(curr)}${curr > 0 ? ' ' + curr : ''}\n${acc}`, '');
```

```js
const histogram = (results) => {
  let res = [];
  for (let i = 5; i >= 0; i--) {
    res.push(`${i + 1}|${'#'.repeat(results[i])}${results[i] > 0 ? ' ' + results[i] : ''}`);
  }
  return res.join('\n') + '\n';
};
```
