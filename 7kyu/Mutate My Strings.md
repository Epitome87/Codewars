# [Mutate My Strings](https://www.codewars.com/kata/59bc0059bf10a498a6000025)

## Description

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

```
stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
```

## My Solution

**JavaScript**

```js
const mutateMyStrings = (str1, str2) =>
  [...str1].reduce(
    (acc, _, i) => acc + (str1[i] !== str2[i] ? `${str2.slice(0, i + 1)}${str1.slice(i + 1)}\n` : ''),
    `${str1}\n`
  );
```

```js
const mutateMyStrings = (stringOne, stringTwo) => {
  let result = `${stringOne}\n`;

  for (let i = 1; i <= stringOne.length; i++) {
    if (stringOne[i - 1] !== stringTwo[i - 1]) {
      result += `${stringTwo.slice(0, i)}${stringOne.slice(i)}\n`;
    }
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
const mutateMyStrings = (strOne, strTwo) => {
  const res = new Set();

  for (let i = 0; i <= strOne.length; i++) {
    res.add(`${strTwo.slice(0, i)}${strOne.slice(i)}\n`);
  }

  return [...res].join('');
};
```
