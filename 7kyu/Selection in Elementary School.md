# [Selection in Elementary School](https://www.codewars.com/kata/5a2e2499b6cfd7f828000014)

## Description

Hello, my name is Anna, and I'm the director of elementary school. Every month I accept applications for schooling from new guys and when I process it manually, I get a little tired. Сould you help me and automate this process?

If so, you have information about the ages of all these new pupils (`array` of ages - only positive digital numbers). Your goal is to sort sort these ages by grade. Your function `schoolSelection` needs to return an object where `key` is grade level and `value` is a number of convenient ages.

Additional information:

    Level           -> age

    Kindergarten     -> 5
    1st grade        -> 6
    2nd grade        -> 7
    3rd grade        -> 8
    4th grade        -> 9

Example:

    schoolSelection([5, 7, 4, 9, 10, 5, 15, 9, 5])

    Output:
    {
      'Kindergarten': 3,
      '1st grade': 0,
      '2nd grade': 1,
      '3rd grade': 0,
      '4th grade': 2,
    }

## My Solution

**JavaScript**

```js
const schoolSelection = (array) => {
  const map = { 5: 'Kindergarten', 6: '1st grade', 7: '2nd grade', 8: '3rd grade', 9: '4th grade' };
  const result = { Kindergarten: 0, '1st grade': 0, '2nd grade': 0, '3rd grade': 0, '4th grade': 0 };

  for (let age of array) {
    if (age in map) result[map[age]]++;
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
const schoolSelection = (array) => {
  return {
    Kindergarten: array.filter((x) => x === 5).length,
    '1st grade': array.filter((x) => x === 6).length,
    '2nd grade': array.filter((x) => x === 7).length,
    '3rd grade': array.filter((x) => x === 8).length,
    '4th grade': array.filter((x) => x === 9).length,
  };
};
```
