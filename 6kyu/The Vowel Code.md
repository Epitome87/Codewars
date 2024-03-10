# [The Vowel Code](https://www.codewars.com/kata/53697be005f803751e0015aa)

## Description

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

```
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
```

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

## My Solution

**JavaScript**

```js
const encode = (string) => string.replace(/[aeiou]/g, (x) => '_aeiou'.indexOf(x));
const decode = (string) => string.replace(/[1-5]/g, (x) => '_aeiou'.charAt(x));
```

```js
const encode = (string) =>
  string
    .split('')
    .map((c) => ('aeiou'.includes(c) ? 'aeiou'.indexOf(c) + 1 : c))
    .join('');

const decode = (string) =>
  string
    .split('')
    .map((c) => ('12345'.includes(c) ? 'aeiou'[c - 1] : c))
    .join('');
```

**Python**

```py
def encode(st):
    return ''.join([str('_aeiou'.index(x)) if x in 'aeiou' else x for x in st])

def decode(st):
    return ''.join('aeiou'[int(x) - 1] if x in '12345' else x for x in st)
```

### User Solution

**Python**

```py
CIPHER = ("aeiou", "12345")

def encode(st):
    return st.translate(str.maketrans(CIPHER[0], CIPHER[1]))

def decode(st):
    return  st.translate(str.maketrans(CIPHER[1], CIPHER[0]))
```

## Takeaways

1. Utilize `String.prototype.charAt()` more often. If string is empty, it will return an empty string rather than undefined, which may be useful sometimes.
