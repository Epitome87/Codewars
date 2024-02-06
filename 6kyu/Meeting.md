# [Meeting](https://www.codewars.com/kata/59df2f8f08c6cec835000012)

## Description

John has invited some friends. His list is:

```js
s = 'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';
```

Could you make a program that

- makes this string uppercase
- gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

```js
'(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)';
```

It can happen that in two distinct families with the same family name two people have the same first name too.

## My Solution

**JavaScript**

```js
const meeting = (str) =>
  str
    .toUpperCase()
    .split(';')
    .map((name) => name.split(':').reverse())
    .sort()
    .reduce((acc, curr) => acc + `(${curr[0]}, ${curr[1]})`, '');
```

### User Solution

**JavaScript**

```js
const meeting = (s) => {
  return s
    .toUpperCase()
    .replace(/(\w+):(\w+)/g, '($2, $1)')
    .split(';')
    .sort()
    .join('');
};
```
