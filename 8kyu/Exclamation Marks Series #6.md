# [Exclamation Marks Series #6: Remove n Exclamation marks in the Sentence from Left to Right](https://www.codewars.com/kata/57faf7275c991027af000679)

## Description

Remove `n` exclamation marks in the sentence from left to right. `n` is positive integer.

**Examples**

```js
remove('Hi!', 1) === 'Hi';
remove('Hi!', 100) === 'Hi';
remove('Hi!!!', 1) === 'Hi!!';
remove('Hi!!!', 100) === 'Hi';
remove('!Hi', 1) === 'Hi';
remove('!Hi!', 1) === 'Hi!';
remove('!Hi!', 100) === 'Hi';
remove('!!!Hi !!hi!!! !hi', 1) === '!!Hi !!hi!!! !hi';
remove('!!!Hi !!hi!!! !hi', 3) === 'Hi !!hi!!! !hi';
remove('!!!Hi !!hi!!! !hi', 5) === 'Hi hi!!! !hi';
remove('!!!Hi !!hi!!! !hi', 100) === 'Hi hi hi';
```

## My Solution

**JavaScript**

```js
const remove = (str, n) => (n ? remove(str.replace('!', ''), --n) : str);
```

```js
const remove = (s, n) => {
  while (n-- > 0) s = s.replace('!', '');
  return s;
};
```

**Python**

```py
def remove(st, n):
    return st.replace("!", "", n)
```
