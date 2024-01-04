# [Triple Trouble](https://www.codewars.com/kata/5704aea738428f4d30000914)

## Description

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

## My Solution

**JavaScript**

```js
const tripleTrouble = (one, two, three) => {
  let result = '';

  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }

  return result;
};
```

```js
const tripleTrouble = (one, two, three) =>
  Array.from({ length: one.length }, (_, i) => `${one[i]}${two[i]}${three[i]}`).join('');
```

**Python**

```py
def triple_trouble(one, two, three):
    return ''.join([one[i] + two[i] + three[i] for i in range(len(one))])
```

```py
def triple_trouble(one, two, three):
    result = ''
    for i in range(len(one)):
        result += one[i] + two[i] + three[i]
    return result
```

### User Solution

**JavaScript**

```js
const tripleTrouble = (one, two, three) =>
  one
    .split('')
    .map((letter, index) => letter + two[index] + three[index])
    .join('');
```

```js
function tripleTrouble(one, two, three) {
  return one.replace(/./g, (v, i) => v + two[i] + three[i]);
}
```
