# [Holiday V - SeaSick Snorkelling](https://www.codewars.com/kata/57e90bcc97a0592126000064)

## Description

Thanks to the effects of El Nino this year my holiday snorkelling trip was akin to being in a washing machine... Not fun at all.

Given a string made up of '~' and '\_' representing waves and calm respectively, your job is to check whether a person would become seasick.

Remember, only the process of change from wave to calm will add to the effect (really wave peak to trough but this will do). Find out how many changes in level the string has and if that figure is more than 20% of the array, return "Throw Up", if less, return "No Problem".

## My Solution

**JavaScript**

```js
const seaSick = (x) =>
  [...x].slice(0, -1).reduce((acc, cur, i) => (cur !== x[i + 1] ? acc + 1 : acc), 0) > 0.2 * x.length
    ? 'Throw Up'
    : 'No Problem';
```

```js
const seaSick = (x) => {
  let changeCount = 0;

  for (let i = 0; i < x.length - 1; i++) {
    if (x[i] !== x[i + 1]) changeCount++;
  }

  return changeCount > 0.2 * x.length ? 'Throw Up' : 'No Problem';
};
```

### User Solution

**JavaScript**

```js
function seaSick(x) {
  var a = x.split('_~').length - 1;
  var b = x.split('~_').length - 1;
  return (a + b) / x.length > 0.2 ? 'Throw Up' : 'No Problem';
}
```

```js
function seaSick(x) {
  const persent = (x.match(/~_/g) || []).length + (x.match(/_~/g) || []).length;
  return x.length * 0.2 >= persent ? 'No Problem' : 'Throw Up';
}
```

```js
const seaSick = (s) => ((s.match(/~+|_+/g).length - 1) / s.length > 0.2 ? 'Throw Up' : 'No Problem');
```
