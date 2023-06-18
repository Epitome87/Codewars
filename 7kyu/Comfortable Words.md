# [Comfortable Words](https://www.codewars.com/kata/56684677dc75e3de2500002b)

## Description

A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

The word will always be a string consisting of only ascii letters from a to z.

To avoid problems with image availability, here's the lists of letters for each hand:

Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
Right: y, u, i, o, p, h, j, k, l, n, m

**Examples**

```
"yams"  -->  true
"test"  -->  false
```

## My Solution

**JavaScript**

```js
const comfortableWord = (word) => {
  const left = 'qwertasdfgazxcvb';
  const right = 'yuiophijklmn';

  return (
    [...word].every((c, idx) => (idx % 2 ? left.includes(c) : right.includes(c))) ||
    [...word].every((c, idx) => (idx % 2 ? right.includes(c) : left.includes(c)))
  );
};
```

```js
const comfortableWord = (word) => {
  const left = 'qwertasdfgazxcvb';
  const right = 'yuiophijklmn';
  let lastHandUsed = undefined;
  for (const letter of word) {
    let handRequired = undefined;
    if (left.includes(letter)) handRequired = 'left';
    else if (right.includes(letter)) handRequired = 'right';
    if (handRequired === lastHandUsed) return false;
    lastHandUsed = handRequired;
  }
  return true;
};
```

### User Solution

**JavaScript**

```js
const comfortable_word = (word) => {
  const LEFT = '[qwertasdfgzxcvb]';
  const RIGHT = '[yuiophjklnm]';

  var alternating = `^${LEFT}?(${RIGHT}${LEFT})*${RIGHT}?$`;

  return RegExp(alternating).test(word);
};
```

```js
const comfortable_word = (word) => {
  let right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];
  let tst = word
    .split('')
    .map((r) => {
      return right.includes(r) ? 'r' : 'l';
    })
    .join('');
  return !(tst.includes('ll') || tst.includes('rr'));
};
```
