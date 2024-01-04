# [Flick Switch](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)

## Description

Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples

```
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
```

Notes

- "flick" will always be given in lowercase.
- A list may contain multiple flicks.
- Switch the boolean value on the same element as the flick itself.

## My Solution

**JavaScript**

```js
const flickSwitch = (arr) => ((flick = true), arr.map((v) => (v === 'flick' ? (flick = !flick) : flick)));
```

```js
const flickSwitch = (arr) => {
  let flick = true;

  return arr.reduce((acc, cur) => {
    if (cur === 'flick') flick = !flick;
    return [...acc, flick];
  }, []);
};
```

**Python**

```py
def flick_switch(lst):
    result = []
    flick = True
    for item in lst:
        if item == 'flick':
            flick = not flick
        result.append(flick)
    return result
```

### User Solution

**Python**

```py
def flick_switch(lst):
    flick = True
    return [ (flick := flick ^ (v == 'flick')) for v in lst]
```

## Takeaways

1. Explanation of the user Python solution:

   - flick is used as an alternating Boolean flag
   - material within the brackets is a list comprehension
   - := is the walrus operator, reassigning flick at each iteration
   - ^ is a bitwise operator reversing the parity of the flag when the element == 'flick'
