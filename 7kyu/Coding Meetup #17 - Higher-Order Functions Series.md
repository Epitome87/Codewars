# [Coding Meetup #17 - Higher-Order Functions Series](https://www.codewars.com/kata/583ea278c68d96a5fd000abd)

## Description

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organizing.

Given the following input array:

```js
var list1 = [
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  {
    firstName: 'Precious',
    lastName: 'G.',
    country: 'South Africa',
    continent: 'Africa',
    age: 22,
    language: 'JavaScript',
  },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
];
```

Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:

```js
[
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
  {
    firstName: 'Precious',
    lastName: 'G.',
    country: 'South Africa',
    continent: 'Africa',
    age: 22,
    language: 'JavaScript',
  },
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
];
```

Notes:

- The input array will always be valid and formatted as in the example above.
- The array does not include developers coding in the same language and sharing the same name.

## My Solution

**JavaScript**

```js
const sortByLanguage = (list) =>
  [...list].sort((a, b) => a.language.localeCompare(b.language) || a.firstName.localeCompare(b.firstName));
```

```js
const sortByLanguage = (list) =>
  list.sort((a, b) =>
    a.language < b.language
      ? -1
      : a.language > b.language
      ? 1
      : a.firstName < b.firstName
      ? -1
      : a.firstName > b.firstName
      ? 1
      : 0
  );
```

## Takeaways:

1. Remember, when we can't do a simple .sort() call without arguments, we can compare two strings by returning -1 if a < b, 1 if a > b, and 0 if equal.
2. We can also just use str1.localCompare(str2), where -1 means str1 is alphabetically sooner than str2.
