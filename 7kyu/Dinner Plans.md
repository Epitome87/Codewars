# [Dinner Plans](https://www.codewars.com/kata/57212c55b6fa235edc0002a2)

## Description

**Two samurai generals are discussing dinner plans after a battle, but they can't seem to agree.**

The discussion gets heated and you are cannot risk favoring either of them as this might damage your political standing with either of the two clans the samurai generals belong to. Thus, the only thing left to do is find what the common ground of what they are saying is.

Compare the proposals with the following function:

```js
function commonGround(s1, s2)
```

The parameters s1 and s2 are the strings representing what each of the generals said. You should output a string containing the words in s1 that also occur in s2.

Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurrence of each word in s2.

If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")

## My Solution

**JavaScript**

```js
const commonGround = (s1, s2) => {
  const [arr1, arr2] = [s1.split(' '), s2.split(' ')];
  const [longer, shorter] = [arr1.length > arr2.length ? arr1 : arr2, arr1.length > arr2.length ? arr2 : arr1];
  return shorter.filter((v) => longer.includes(v)).join(' ') || 'death';
};
```

### User Solution

**JavaScript**

```js
const commonGround = (s1, s2) =>
  s2
    .split(` `)
    .filter((val) => s1.includes(val))
    .join(` `) || `death`;
```
