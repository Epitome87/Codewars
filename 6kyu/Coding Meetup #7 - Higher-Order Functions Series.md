# [Coding Meetup #7 - Higher-Order Functions Series](https://www.codewars.com/kata/582887f7d04efdaae3000090)

## Description

You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:

```js
var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
```

your function should return the following array:

```js
[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
```

Notes:

- The input array will always be valid and formatted as in the example above and will never be empty.

## My Solution

**JavaScript**

```js
const findSenior = (list) => {
  const sorted = [...list].sort((a, b) => b.age - a.age);
  return sorted.filter((dev, idx, arr) => dev.age === arr[0].age);
};
```

```js
const findSenior = (list) => list.filter((v) => v.age === Math.max(...list.map((v) => v.age)));
```

**Python**

```py
def find_senior(lst):
    ages = list(map(lambda x: x["age"], lst))
    max_age = max(ages)
    return [x for x in lst if x["age"] == max_age]
```
