# [The Baby Years I - Baby Counting](https://www.codewars.com/kata/5bc9951026f1cdc77400011c)

## Description

You've had a baby.

Well done. Nice isn't it? Life destroying... but in a good way.

Part of your new routine is lying awake at night worrying that you've either lost the baby... or that you have more than 1!

Given a string of words (x), you need to calculate how many babies are in it. To count as a baby you must have all of the letters in baby ('b', 'a', 'b', 'y'). That counts as 1. They do not need to be in order in the string. Upper and lower case letters count.

Examples:

```
"baby" = 1
"abby" = 1
"babybaby" = 2
"Why the hell are there so many babies?!" = 1
"Anyone remember life before babies?" = 1
"Happy babies boom ba by?" = 2
```

If there are no babies in the string - you lost the baby!! Return a different value, as shown below:

'none here' = "Where's the baby?!" '' = "Where's the baby?!"

## My Solution

**JavaScript**

```js
const babyCount = (x) => {
  const numB = ((x.split(/b/gi).length - 1) / 2) ^ 0;
  const numA = x.split(/a/gi).length - 1;
  const numY = x.split(/y/gi).length - 1;
  const numBaby = Math.min(numB, numA, numY);

  return numBaby || "Where's the baby?!";
};
```

```js
const babyCount = (x) => {
  const numB = ((x.match(/b/gi) || []).length / 2) ^ 0;
  const numA = (x.match(/a/gi) || []).length;
  const numY = (x.match(/y/gi) || []).length;
  const numBaby = Math.min(numB, numA, numY);

  return numBaby || "Where's the baby?!";
};
```

### User Solution

**JavaScript**

```js
const babyCount = (s) =>
  Math.min((s.replace(/[^b]/gi, '').length / 2) | 0, s.replace(/[^a]/gi, '').length, s.replace(/[^y]/gi, '').length) ||
  "Where's the baby?!";
```
