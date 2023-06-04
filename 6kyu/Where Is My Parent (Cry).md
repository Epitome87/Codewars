# [Where Is My Paren!? (Cry)](https://www.codewars.com/kata/58539230879867a8cd00011c)

## Description

Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

**Legend:**

- Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
- Function input: String contains only letters, uppercase letters are unique.

**Task:**

Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

## My Solution

**JavaScript**

```js
const findChildren = (dancingBrigade) =>
  dancingBrigade
    .match(/[a-z]/g)
    .sort()
    .reduce((acc, curr, idx, arr) => `${acc}${curr != arr[idx - 1] ? curr.toUpperCase() : ''}${curr}`, '');
```

```js
const findChildren = (dancingBrigade) => {
  const children = dancingBrigade.match(/[a-z]/g).sort();
  return children.reduce(
    (acc, curr, idx, arr) => (curr !== arr[idx - 1] ? `${acc}${curr.toUpperCase()}${curr}` : `${acc}${curr}`),
    ''
  );
};
```

### User Solution

**JavaScript**

```js
function findChildren(dancingBrigade) {
  return dancingBrigade
    .split('')
    .sort((a, b) => a.localeCompare(b, 'kf', { caseFirst: 'upper' }))
    .join('');
}
```

```js
// Similar to mine, but a little different!
function findChildren(dancingBrigade) {
  return dancingBrigade
    .toLowerCase()
    .split('')
    .sort()
    .map((v, i, a) => {
      return i === 0 || v !== a[i - 1] ? v.toUpperCase() : v;
    })
    .join('');
}
```

## Takeaways

1. Look into the optional parameters of the `localeCompare` method! In the user solution, we can specify that we want to differentiate between uppercase and lowercase, and sort uppercase first.
