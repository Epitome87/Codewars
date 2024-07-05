# [Create Palindrome](https://www.codewars.com/kata/5b7bd90ef643c4df7400015d)

## Description

Consider the string `"adfa"` and the following rules:

```
a) each character MUST be changed either to the one before or the one after in alphabet.
b) "a" can only be changed to "b" and "z" to "y".
```

From our string, we get:

```
"adfa" -> ["begb","beeb","bcgb","bceb"]

Here is another example:
"bd" -> ["ae","ac","ce","cc"]

--We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".
```

You will be given a lowercase string and your task is to return `True` if at least one of the outcomes is a palindrome or `False` otherwise.

## My Solution

**JavaScript**

```js
const solve = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    const leftChar = s.charCodeAt(left);
    const rightChar = s.charCodeAt(right);
    const distance = Math.abs(leftChar - rightChar);

    // Only distances of 0 (same starting chars) or 2 result in same char possibility
    if (distance > 2 || distance === 1) return false;

    left++;
    right--;
  }

  return true;
};
```

```js
const adjacentLetters = (letter) => {
  if (letter === 'a') return ['b'];
  if (letter === 'z') return ['y'];

  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const letterIdx = alpha.indexOf(letter);

  return [alpha[letterIdx - 1], alpha[letterIdx + 1]];
};

const solve = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    const leftOptions = adjacentLetters(s[left]);
    const rightOptions = adjacentLetters(s[right]);

    if (!rightOptions.includes(leftOptions[0]) && !rightOptions.includes(leftOptions[1])) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
```

**Python**

```py
def solve(st):
    left, right = 0, len(st) - 1

    while left <= right:
        left_char = ord(st[left])
        right_char = ord(st[right])
        distance = abs(left_char - right_char)

        if distance == 1 or distance > 2:
            return False

        left += 1
        right -= 1

    return True
```

### User Solution

**Python**

```py
def solve(st):
    return all(abs(ord(x) - ord(y)) in {0, 2} for x, y in zip(st, st[::-1]))
```
