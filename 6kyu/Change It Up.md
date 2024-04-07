# [Change it Up](https://www.codewars.com/kata/58039f8efca342e4f0000023)

## Description

Create a function that takes a string as a parameter and does the following, in this order:

1. Replaces every letter with the letter following it in the alphabet (see note below)
2. Makes any vowels capital
3. Makes any consonants lower case

Note:

- the alphabet should wrap around, so `Z` becomes `A`
- in this kata, `y` isn't considered as a vowel.

So, for example the string `"Cat30"` would return `"dbU30"` `(Cat30 --> Dbu30 --> dbU30)`

## My Solution

**JavaScript**

```js
const changer = (str) =>
  str
    .toLowerCase()
    .replace(/[a-z]/g, (c) => String.fromCharCode(((c.charCodeAt() - 96) % 26) + 97))
    .replace(/[aeiou]/g, (c) => c.toUpperCase());
```

```js
function changer(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  str = str.toLowerCase();
  const nextLetter = [...str].map((letter) =>
    alpha.includes(letter) ? alpha[(alpha.indexOf(letter) + 1) % 26] : letter
  );
  const capVowels = nextLetter.map((letter) => ('aeiou'.includes(letter) ? letter.toUpperCase() : letter));
  return capVowels.join('');
}
```

**Python**

```py
def changer(s):
    alpha = 'abcdefghijklmnopqrstuvwxyz';
    s = s.lower()
    s = ''.join(alpha[(alpha.index(c) + 1) % 26] if c.isalpha() else c for c in s)
    s = ''.join(c.upper() if c in "aeiou" else c for c in s)
    return s
```

### User Solution

**JavaScript**

```js
const letters = 'abcdEefghIijklmnOopqrstUuvwxyzA';
const changer = (s) => s.replace(/[a-z]/gi, (c) => letters[letters.indexOf(c.toLowerCase()) + 1]);
```

**Python**

```py
table = str.maketrans("abcdefghijklmnopqrstuvwxyz", "bcdEfghIjklmnOpqrstUvwxyzA")


def changer(stg):
    return stg.lower().translate(table)
```

```py
changer=lambda s: "".join([a if not a.isalpha() else chr((ord(a)-96)%26+97).upper() if a in "zdhnt" else chr(ord(a)+1) for a in s.lower()])
```
