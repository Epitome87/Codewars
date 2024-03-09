# [Coding Meetup #8 - Higher-Order Functions Series](https://www.codewars.com/kata/58291fea7ff3f640980000f9)

## Description

You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

- true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
- false otherwise.

For example, given the following input array:

```js
var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
```

your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:

The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

## My Solution

**JavaScript**

```js
const allContinents = (list) => {
  const res = {};
  list.forEach((dev) => (res[dev.continent] = true));

  return Object.keys(res).length === 5;
};
```

```js
function allContinents(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every((x) => list.some((y) => x == y.continent));
}
```

```js
const allContinents = (arr) => new Set(arr.map((dev) => dev.continent)).size === 5;
```

**Python**

```py
def all_continents(developers):
    return len({dev["continent"] for dev in developers }) == 5
```
