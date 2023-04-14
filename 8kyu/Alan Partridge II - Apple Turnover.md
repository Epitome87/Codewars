# Alan Partridge II - Apple Turnover

## Description

Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).

## My Solution

**JavaScript**

```js
const apple = (x) =>
  Math.pow(x, 2) > 1000 ? "It's hotter than the sun!!" : 'Help yourself to a honeycomb Yorkie for the glovebox.';
```

**TypeScript**

```ts
export const apple = (x: number | string): string =>
  Math.pow(typeof x === 'number' ? x : +x, 2) > 1000
    ? "It's hotter than the sun!!"
    : 'Help yourself to a honeycomb Yorkie for the glovebox.';
```

### User Solution

**TypeScript**

```ts
// I tried coercing x to a number with '+x' but it didn't work in my solution?!
export function apple(x: number | string): string {
  return (+x) ** 2 > 1000 ? "It's hotter than the sun!!" : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}
```
