# [Test's Results](https://www.codewars.com/kata/599db0a227ca9f294b0000c8)

## Description

It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:

- Calculate the average mark of the whole class and round it to 3 decimal places.
- Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
- Return list [class_average, dictionary] if there are different type of marks, or [class_average, dictionary, "They did well"] if there are only high marks.

**Examples**

```
[10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

[5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]
```

## My Solution

**JavaScript**

```js
const testResult = (array) => {
  const dict = array.reduce(
    (acc, curr) => {
      const key = curr >= 9 ? 'h' : curr >= 7 ? 'a' : 'l';
      acc[key] = acc[key] + 1 || 1;
      return acc;
    },
    { h: 0, a: 0, l: 0 }
  );
  const avg = array.reduce((sum, curr) => sum + curr, 0) / array.length;
  const onlyHigh = dict['h'] > 0 && dict['a'] === 0 && dict['l'] === 0;
  const result = [+avg.toFixed(3), dict];
  return onlyHigh && result.push('They did well'), result;
};
```

### User Solution

**JavaScript**

```js
function testResult(array) {
  let avg = (array.reduce((a, b) => a + b) / array.length).toFixed(3);
  let h = array.filter((a) => a > 8).length;
  let l = array.filter((b) => b < 7).length;
  let a = array.filter((c) => c > 6 && c < 9).length;
  let result = [Number(avg), { h: h, a: a, l: l }];
  return l == 0 && a == 0 && h !== 0 ? result.concat(['They did well']) : result;
}
```

## Takeaways

1. Since `Array.prototype.push(item)` does not return the new array, we can use `Array.concat([item])` in times where we want the return value the same step as the operation.
