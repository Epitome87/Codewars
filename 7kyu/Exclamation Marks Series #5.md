# [Exclamation Marks Series #5: Remove All Exclamation Marks From the Ends of Words](https://www.codewars.com/kata/57faf32df815ebd49e000117)

## Description

Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

**Examples**

```js
remove('Hi!') === 'Hi';
remove('Hi!!!') === 'Hi';
remove('!Hi') === '!Hi';
remove('!Hi!') === '!Hi';
remove('Hi! Hi!') === 'Hi Hi';
remove('!!!Hi !!hi!!! !hi') === '!!!Hi !!hi !hi';
```

## My Solution

**JavaScript**

```js
const remove = (str) => str.replace(/(\w)!+/g, '$1');
```

```js
const remove = (str) =>
  str
    .split(' ')
    .map((word) => word.replace(/!+$/, ''))
    .join(' ');
```

**Python**

```py
def remove(st):
    return " ".join(word.rstrip("!") for word in st.split())
```

### User Solution

**JavaScript**

```js
const remove = (s) => s.replace(/\b!+/g, '');
```
