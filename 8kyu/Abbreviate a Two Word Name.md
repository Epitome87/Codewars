# Abbreviate a Two Word Name

## Description

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

`Sam Harris` => `S.H`

`patrick feeney` => `P.F`

## My Solution

**JavaScript**

```js
// My one-line solution (wouldn't do this in production code -- it's not very readable!)
const abbrevName = (name) => `${name.split(' ')[0][0].toUpperCase()}.${name.split(' ')[1][0].toUpperCase()}`;
```

**TypeScript**

```ts
export const abbrevName = (name: string): string =>
  name
    .split(' ')
    .map((el) => el[0].toUpperCase())
    .join('.');
```

```ts
// More human-readable version
export const abbrevName = (name: string): string => {
  const [firstName, lastName] = name.split(' ');
  const [firstInitial, lastInitial] = [firstName[0].toUpperCase(), lastName[0].toUpperCase()];
  return `${firstInitial}.${lastInitial}`;
};
```
