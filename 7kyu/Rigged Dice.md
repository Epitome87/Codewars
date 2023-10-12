# [Rigged Dice](https://www.codewars.com/kata/573acc8cffc3d13f61000533)

## Description

Create a rigged dice function that 22% of the time returns the number 6. The rest of the time it returns the integers 1,2,3,4,5 uniformly.

About the test case

There will only be one test case which calls the throw_rigged function 100k times and checks that 6 is returned in the range of 21700-22300 (inclusive) times. The test does not check that 1-5 is returned uniformly or randomly, but it does check that your function returns integers in the range 1-6 (inclusive).

The test works roughly 98% of the time, so you might want to run it twice if you are confident your solution is correct.

In JS version, test for:

- return value should between 1-6;
- return value should be randomly;
- run your code 100000 times should produce 21700-22300 numbers 6

## My Solution

**JavaScript**

```js
const throwRigged = () => {
  const ran = Math.floor(Math.random() * 100);
  return ran < 15.6 ? 1 : ran < 31.2 ? 2 : ran < 46.8 ? 3 : ran < 62.4 ? 4 : ran < 78 ? 5 : 6;
};
```

### User Solution

**JavaScript**

```js
const throwRigged = () => (Math.random() <= 0.22 ? 6 : Math.floor(Math.random() * 5 + 1));
```

```js
const throwRigged = () => Math.min((1 + (Math.random() / 0.78) * 5) ^ 0, 6);
```
