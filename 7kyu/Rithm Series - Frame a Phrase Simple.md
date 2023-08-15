# [Rithm Series: Frame a Phrase Simple](https://www.codewars.com/kata/5867d76b36959fa4a400034e)

## Description

Carpe Diem! Yolo! On Fleek? Crushing it. You've got some awesome phrases that you want to hang up on your wall. The problem is that you don't have any frames laying around. So instead, you decide to write a program to create your frame.

Write a function called frame that will take two parameters as input: a phrase and optionally a character for the border of the frame.

```
frame("Yolo", '@');
```

Returns:

```
@@@@@@@@
@      @
@ Yolo @
@      @
@@@@@@@@
```

Notice that the framed phrase has a single space to the left and to the right. Also, there is an empty line both above and below the phrase.

If a second parameter is not given, assume the frame should be decorated using the \* character.

You can assume that all phrases are a single line (no new line characters), and that the second parameter to the function (the frame character) is always a single character.

If an empty string is passed in, return an emtpy frame. For example:

```
frame("");
```

returns:

```
****
*  *
*  *
****
```

## My Solution

**JavaScript**

```js
const frame = (phrase, ch = '*') => {
  const frameWidth = phrase.length + 4;
  let result = '';

  result += ch.repeat(frameWidth) + '\n';
  result += ch + ' '.repeat(frameWidth - 2) + ch + '\n';
  result += phrase ? ch + ' ' + phrase + ' ' + ch + '\n' : '';
  result += ch + ' '.repeat(frameWidth - 2) + ch + '\n';
  result += ch.repeat(frameWidth);

  return result;
};
```

### User Solution

**JavaScript**

```js
function frame(phrase, ch = '*') {
  const width = phrase.length + 4;
  const empltySpace = ch + ' '.repeat(width - 2) + ch;
  const border = ch.repeat(width);
  if (!phrase) return [border, empltySpace, empltySpace, border].join`\n`;
  return [border, empltySpace, ch + ' ' + phrase + ' ' + ch, empltySpace, border].join`\n`;
}
```
