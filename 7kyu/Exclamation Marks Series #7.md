# [Exclamation Marks Series #7: Remove Words from the Sentence if it Contains One Exclamation Mark](https:/s/www.codewars.com/kata/57fafb6d2b5314c839000195)

## Description

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

**Examples**

```js
remove('Hi!') === '';
remove('Hi! Hi!') === '';
remove('Hi! Hi! Hi!') === '';
remove('Hi Hi! Hi!') === 'Hi';
remove('Hi! !Hi Hi!') === '';
remove('Hi! Hi!! Hi!') === 'Hi!!';
remove('Hi! !Hi! Hi!') === '!Hi!';
```

## My Solution

**JavaScript**

```js
const remove = (string) =>
  string
    .split(' ')
    .filter((word) => !(word.includes('!') && word.indexOf('!') === word.lastIndexOf('!')))
    .join(' ');
```

**Python**

```py
def remove(s):
    return " ".join(word for word in s.split(" ") if word.count("!") != 1)
```

### User Solution

**JavaScript**

```js
function remove(s) {
  return s
    .split(' ')
    .filter((i) => i.split('!').length != 2)
    .join(' ');
}
```

```js
function remove(s) {
  return s.replace(/((\s|^)!\w+\b(?!!))|((\s|^)\w+!(?!!))/g, '').trim();
}
```
