## [Beeramid](https://www.codewars.com/kata/51e04f6b544cf3f6550000c1)

## Description

Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

1. your referral bonus, and
2. the price of a beer can

For example:

```js
beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
```

## My Solution

**JavaScript**

```js
const beeramid = (bonus, price) => {
  for (let level = 1; ; level++) {
    bonus -= price * level * level;
    if (bonus < 0) return level - 1;
  }
};
```

**TypeScript**

```ts
export function beeramid(bonus: number, price: number): number {
  for (let level = 1; ; level++) {
    bonus -= price * level * level;
    if (bonus < 0) return level - 1;
  }
}
```

### User Solution

**JavaScript**

```js
const beeramid = (bonus, price, lvl = 1) =>
  bonus - lvl ** 2 * price < 0 ? --lvl : beeramid(bonus - lvl ** 2 * price, price, ++lvl);
```

**TypeScript**

```ts
export function beeramid(bonus: number, price: number, level: number = 1): number {
  const cost = level * level * price;
  if (bonus < cost) return level - 1;
  return beeramid(bonus - cost, price, ++level);
}
```
