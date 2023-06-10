# [ASCII Letters From Numbers](https://www.codewars.com/kata/589ebcb9926baae92e000001)

## Description

You have to create a function that converts integer given as string into ASCII uppercase letters.

All ASCII characters have their numerical order in table.

For example,

```
from ASCII table, character of number 65 is "A".
```

Numbers will be next to each other, So you have to split given number to two digit long integers.

For example,

```
'658776' to [65, 87, 76] and then turn it into 'AWL'.
```

Good Luck!

## My Solution

**JavaScript**

```js
const convert = (number) =>
  [...Array(number.length / 2)].reduce(
    (acc, _, idx) => acc + String.fromCharCode(number.slice(idx * 2, idx * 2 + 2)),
    ''
  );
```

```js
const convert = (number) => {
  const nums = [];
  for (let i = 0; i < number.length; i += 2) {
    nums.push(String.fromCharCode(number.slice(i, i + 2)));
  }

  return nums.join('');
};
```

### User Solution

**JavaScript**

```js
function convert(number) {
  return String.fromCharCode(...number.match(/../g));
}
```
