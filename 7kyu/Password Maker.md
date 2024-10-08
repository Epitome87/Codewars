# [Password Maker](https://www.codewars.com/kata/5637b03c6be7e01d99000046)

## Description

One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter `O` can be replaced with the number `0`):

- instead of including `i` or `I` put the number `1` in the password;
- instead of including `o` or `O` put the number `0` in the password;
- instead of including `s` or `S` put the number `5` in the password.

**Examples:**

    "Give me liberty or give me death"  --> "Gml0gmd"
    "Keep Calm and Carry On"            --> "KCaC0"

## My Solution

**JavaScript**

```js
const makePassword = (phrase) =>
  phrase
    .split(' ')
    .map((c) => c[0])
    .join('')
    .replace(/i/gi, '1')
    .replace(/o/gi, '0')
    .replace(/s/gi, '5');
```

**Python**

```py
SWAP = {'i': '1', 'I': '1', 'o': '0', 'O': '0', 's': '5', 'S': '5'}


def make_password(phrase):
    return ''.join(SWAP.get(x[0], x[0]) for x in phrase.split())
```

```py
def make_password(phrase):
    result = ''

    for word in phrase.split():
        result += word[0]

    return ''.join(result).replace('i', '1').replace('I', '1').replace('o', '0').replace('O', '0').replace('s', '5').replace('S', '5')
```
