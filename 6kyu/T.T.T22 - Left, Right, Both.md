# [T.T.T22: Left? Right? Both?](https://www.codewars.com/kata/57a8afa072292dccfe000270)

## Description

### Task

You have a keyboard like this:

![!!](https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/KB_United_States-NoAltGr.svg/450px-KB_United_States-NoAltGr.svg.png)

You strictly abide by the typing standard. That is, use the left hand hit the left part of the keyboard, use the right hand hit the right part of keyboard, the boundary is:

     L     1.....5 | 6.....0     R
     E     Q.....T | Y.....P     I
     F     A.....G | H.....'     G
     T     Z.....B | N...../     H
              SPACEBAR           T

**Note:** the `SpaceBar` is an exception, because both hands can be used to hit it.

Complete the function that accepts a string.

- if the string can be typed by the left hand only, return `"Left"`
- if the string can be typed by the right hand only, return `"Right"`
- if both hands are needed to type the string, return `"Both"`
- if the string is empty or contains only spaces, return an empty string `""`

Please remember that we are discussing the keyboard above and not any other one. The reason is that we need a standard. And we will not test characters that are outside the control of both hands (please see the boundary).

### Examples

    "qwert"    -->  "Left"
    "yuiop"    -->  "Right"
    "abc"      -->  "Left"
    "ABC"      -->  "Left"
    "a b c"    -->  "Left"
    "xyz"      -->  "Both"
    "look up"  -->  "Right"
    "^&*()"    -->  "Right"
    ""         -->  ""
    "  "       -->  ""

## My Solution

**JavaScript**

```js
function leftRightOrBoth(text) {
  const keyboard = {
    leftSet: new Set('12345qwertasdfgzxcvb!@#$%'),
    rightSet: new Set("67890yuiophjklnm^&*();',./"),
  };

  let isLeftRequired = false;
  let isRightRequired = false;

  for (let key of text.toLowerCase()) {
    if (key === ' ') continue;
    if (keyboard.leftSet.has(key)) isLeftRequired = true;
    else if (keyboard.rightSet.has(key)) isRightRequired = true;
  }

  if (isLeftRequired && !isRightRequired) return 'Left';
  if (!isLeftRequired && isRightRequired) return 'Right';
  if (isLeftRequired && isRightRequired) return 'Both';
  return '';
}
```

### User Solution

**JavaScript**

```js
function leftRightOrBoth(text) {
  text = text.replace(/ /g, '');
  if (!text) return '';
  if (/^[a-gq-tvwxz1-5!@#$%`~]+$/i.test(text)) return 'Left';
  if (/^[^a-gq-tvwxz1-5!@#$%`~]+$/i.test(text)) return 'Right';
  return 'Both';
}
```
