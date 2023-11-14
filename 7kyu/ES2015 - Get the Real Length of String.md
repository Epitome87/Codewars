# [Get the Real Length of String. []](https://www.codewars.com/kata/599c4b69eb8e49effa000079)

## Description

In es5, if the code point of a charactor is large than 0xFFFF will be treat as more than one charactor.

Even codewars can't display emoji correctly.

For example:

The code point of an emoji  （big laugh: '\u{1f602}'）is 0x1f602.

So you will see:

```js
''.length; // 2
```

Note: some emoji have more than one codepoint like  (China: '\u{1F1E8}\u{1F1F3}')，which is 0x1F1E8 0x1F1F3. This kata do not consider this situation for now.

And some chinese characters like Y which code point is 0x20059.

```js
'Y'.length; // 2
```

We want get the real length of string. 

You need to write a function named `getRealLength` to get it.

## My Solution

**JavaScript**

```js
const getRealLength = (str) => [...str].length;
```

### User Solution

**JavaScript**

```js
function getRealLength(s) {
  let counter = 0;
  for (let ch of s) {
    counter++;
  }
  return counter;
}
```

## Takeaways

1. `String.prototype.length` gives the count of UTF-16 units. So a Unicode-proof way to get string length in codepoints (in characters) is `[...str].length`, as iterable protocol splits the string to codepoints.
