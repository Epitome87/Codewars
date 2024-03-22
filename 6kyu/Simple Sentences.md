# [Simple Sentences](https://www.codewars.com/kata/5297bf69649be865e6000922)

## Description

Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:

- words;
- commas in the middle;
- multiple periods at the end.

Sentence making rules:

- there must always be a space between words;
- there must not be a space between a comma and word on the left;
- there must always be one and only one period at the end of a sentence.

Example:

```js
makeSentence(['hello', ',', 'my', 'dear']); // returns 'hello, my dear.'
```

## My Solution

**JavaScript**

```js
const makeSentence = (parts) => {
  return (
    [...parts].reduce((acc, cur, i) => {
      if (i === 0 || cur === ',') return acc + cur;
      if (cur !== '.') return acc + ' ' + cur;
      return acc;
    }, '') + '.'
  );
};
```

```js
const makeSentence = (parts) => {
  let result = '';

  for (let i = 0; i < parts.length; i++) {
    if (i === 0) result += parts[i];
    else if (parts[i] === ',') result += parts[i];
    else if (parts[i] !== '.') result += ' ' + parts[i];
  }

  return result + '.';
};
```

**Python**

```js
def make_sentences(parts):
    return "".join(part if i == 0 or part == "," else " " + part if part != "." else "" for i, part in enumerate(parts)) + "."
```

```py
def make_sentences(parts):
    result = '';

    for i, part in enumerate(parts):
        if (i == 0 or part == ","): result += part
        elif (part != '.'): result += " " + part

    return result + "."
```

### User Solution

**JavaScript**

```js
const makeSentence = (parts) =>
  parts
    .concat(`.`)
    .join(` `)
    .replace(/ ([,.])/g, `$1`)
    .replace(/\.+/, `.`);
```

**Python**

```py
def make_sentences(parts):
    return ' '.join(parts).replace(' ,', ',').strip(' .') + '.'
```
