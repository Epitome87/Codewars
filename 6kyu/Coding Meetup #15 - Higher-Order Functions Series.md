# [Coding Meetup #15 - Higher-Order Functions Series - Find the Odd Names](https://www.codewars.com/kata/583a8bde28019d615a000035)

## Description

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

```js
var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' },
];
```

write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

```js
[{ firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }];
```

Explanation of the above:

- Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
- Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number

Notes:

- Preserve the order of the original list.
- Return an empty array [] if there is no developer with an "odd" name.
- The input array and first names will always be valid and formatted as in the example above.

**JavaScript**

```js
const findOddNames = (list) => list.filter((v) => [...v.firstName].reduce((acc, cur) => acc + cur.charCodeAt(), 0) % 2);
```

**Python**

```py
def find_odd_names(developers):
    char_counts = []
    for dev in developers:
        char_counts.append(sum([ord(c) for c in dev["firstName"]]))
    return [dev for i, dev in enumerate(developers) if char_counts[i] % 2]
```

### User Solution

**Python**

```py
def find_odd_names(lst):
    return [dev for dev in lst if sum(map(ord, dev["firstName"])) % 2]
```
