# [Dead Ants](https://www.codewars.com/kata/57d5e850bfcdc545870000b7)

## Description

An orderly trail of ants is marching across the park picnic area.

It looks something like this:

```
..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
```

But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. The ants surge forward! Oh No, it's an ant stampede!!

Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.

The resulting carnage looks like this:

```
...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
```

Can you find how many ants have died?

**Notes**

- When in doubt, assume that the scattered bits are from the same ant. e.g. 2 heads and 1 body = 2 dead ants, not 3

## My Solution

**JavaScript**

```js
const deadAntCount = (ants) => {
  if (!ants) return 0;

  const str = ants.replace(/ant/g, '');

  let heads = (str.match(/a/g) || []).length;
  let bodies = (str.match(/n/g) || []).length;
  let tails = (str.match(/t/g) || []).length;

  return Math.max(heads, bodies, tails);
};
```
