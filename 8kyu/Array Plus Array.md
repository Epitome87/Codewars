# [Array Plus Array](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)

## Description

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

## My Solution

**JavaScript**

```js
const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);
```

**TypeScript**

```ts
export const arrayPlusArray = (arr1: number[], arr2: number[]): number =>
  [...arr1, ...arr2].reduce((sum, curr) => sum + curr, 0);
```

### User Solution

**JavaScript**

```js
// Clever (though modified the function signature) user solution:
// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a, b) => a + b, 0);
}
```
