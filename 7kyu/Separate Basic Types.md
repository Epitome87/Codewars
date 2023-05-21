# [Separate Basic Types](https://www.codewars.com/kata/60113ded99cef9000e309be3)

## Description

Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

- keep order of values like in input array
- if type is not presented in input, no corresponding property are expected

So, for this input:

```js
['a', 1, 2, false, 'b'];
```

expected output is:

```js
{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}
```

## My Solution

**JavaScript**

```js
const separateTypes = (input) =>
  input.reduce((acc, curr) => ({ ...acc, [typeof curr]: acc[typeof curr] ? [...acc[typeof curr], curr] : [curr] }), {});

// Could also do:
const separateTypes = (input) =>
  input.reduce((acc, curr) => ({ ...acc, [typeof curr]: (acc[typeof curr] || []).concat(curr) }), {});

// Also:
const separateTypes = (input) =>
  input.reduce((acc, curr) => ({ ...acc, [typeof curr]: [...acc([typeof curr] || []), curr] }), {});
```

```js
const separateTypes = (input) => {
  return input.reduce((acc, curr, idx, arr) => {
    const obj = { ...acc };
    if (obj[typeof curr]) obj[typeof curr].push(curr);
    else obj[typeof curr] = [curr];
    return obj;
  }, {});
};
```

### User Solution

**JavaScript**

```js
const separateTypes = (arr) =>
  arr.reduce((pre, val) => ((pre[typeof val] = [...(pre[typeof val] || []), val]), pre), {});
```

## Takeaways

1. The user's way to set the accumulator for the current element's data type is a little more concise than mine.
2. Their way of building up the accumulator is also more concise, making use of the comma-separated list syntax (where only the last expression in the comma-separated list is returned).
