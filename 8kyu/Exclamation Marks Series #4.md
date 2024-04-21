# [Exclamation Marks Series #4: Remove All Exclamation Marks from Sentence but Ensure an Exclamation Mark at the End of String](https://www.codewars.com/kata/57faf12b21c84b5ba30001b0)

## Description

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

**Examples**

```js
remove('Hi!') === 'Hi!';
remove('Hi!!!') === 'Hi!';
remove('!Hi') === 'Hi!';
remove('!Hi!') === 'Hi!';
remove('Hi! Hi!') === 'Hi Hi!';
remove('Hi') === 'Hi!';
```

## My Solution

**JavaScript**

```js
const remove = (str) => str.replace(/!/g, '') + '!';
```

**Python**

```py
def remove(st):
    return st.replace("!", "") + "!"
```
