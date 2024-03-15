# [Coding Meetup #13 - Higher-Order Functions Series - Is the Meetup Language-Diverse?](https://www.codewars.com/kata/58381907f8ac48ae070000de)

## Description

You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

- `true` if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
- `false` otherwise.

For example, given the following input array:

```js
var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' },
];
```

your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

Notes:

- The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
- The input array will always be valid and formatted as in the example above.
- Each of the 3 programming languages will always be represented.

## My Solution

**JavaScript**

```js
const isLanguageDiverse = (list) => {
  const languageCounts = list.reduce((acc, curr) => ({ ...acc, [curr.language]: (acc[curr.language] || 0) + 1 }), {});
  const sorted = Object.values(languageCounts).sort((a, b) => b - a);
  const max = sorted[0];
  const min = sorted[sorted.length - 1];

  return max <= min * 2;
};
```

**Python**

```py
def is_language_diverse(lst):
    languages = [dev["language"] for dev in lst]
    counts = [languages.count(l) for i, l in enumerate(["JavaScript", "Python", "Ruby"])]
    return max(counts) <= min(counts) * 2
```

### User Solution

**JavaScript**

```js
function isLanguageDiverse(list) {
  list = list.map((dev) => dev.language);
  const num = [...new Set(list)].map((el) => list.filter((e) => e === el).length);
  return Math.max(...num) / Math.min(...num) <= 2;
}
```

**Python**

```py
from collections import Counter

def is_language_diverse(lst):
    v = Counter(d['language'] for d in lst).values()
    return max(v) <= 2 * min(v)
```

```py
def is_language_diverse(l):
    a = [i['language'] for i in l]
    b = [a.count(i) for i in set(a)]
    return max(b)<=min(b)*2
```
