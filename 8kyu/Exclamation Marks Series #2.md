# [Exclamation Marks Series #2: Remove All Exclamation Marks from the End of Sentence](https://www.codewars.com/kata/57faece99610ced690000165)

## Description

Remove all exclamation marks from the end of sentence.

**Examples**

```js
remove('Hi!') === 'Hi';
remove('Hi!!!') === 'Hi';
remove('!Hi') === '!Hi';
remove('!Hi!') === '!Hi';
remove('Hi! Hi!') === 'Hi! Hi';
remove('Hi') === 'Hi';
```

## My Solution

**JavaScript**

```js
const remove = (str) => str.replace(/!+$/, '');
```

```js
const remove = (str) => {
  while (str.lastIndexOf('!') === str.length - 1) {
    str = str.slice(0, -1);
  }
  return str;
};
```

**Python**

```py
def remove(st):
    return st.rstrip("!")
```
