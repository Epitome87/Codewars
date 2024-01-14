# [Coding Meetup #3 - Higher-Order Functions Series - Is Ruby Coming?](https://www.codewars.com/kata/5827acd5f524dd029d0005a4)

## Description

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

- true if at least one Ruby developer has signed up; or
- false if there will be no Ruby developers.

For example, given the following input array:

```js
var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
];
```

your function should return true.

Notes:

- The input array will always be valid and formatted as in the example above.

## My Solution

**JavaScript**

```js
const isRubyComing = (list) => list.some((dev) => dev.language === 'Ruby');
```

**Python**

```py
def is_ruby_coming(developers):
    for developer in developers:
        if developer["language"] == "Ruby"
            return True
    return False
```

### User Solution

**Python**

```py
def is_ruby_coming(lst):
    return any(x["language"] == "Ruby" for x in lst)
```
