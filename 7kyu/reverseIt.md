# [reverseIt](https://www.codewars.com/kata/557a2c136b19113912000010)

## Description

You have to create a function named reverseIt.

Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

Examples of inputs and subsequent outputs:

```
"Hello" -> "olleH"

"314159" -> "951413"

[1,2,3] -> [1,2,3]
```

## My Solution

**JavaScript**

```js
const reverseIt = (data) => {
  if (typeof data !== 'string' && typeof data !== 'number') return data;
  const reversed = [...`${data}`].reverse().join('');
  return typeof data === 'string' ? reversed : +reversed;
};
```

```js
const reverseIt = (data) =>
  typeof data === 'number'
    ? +[...'${data}'].reverse().join('')
    : typeof data === 'string'
    ? [...data].reverse().join('')
    : data;
```
