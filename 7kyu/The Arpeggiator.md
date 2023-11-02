# [The Arpeggiator](https://www.codewars.com/kata/563c823393305ec84e000048)

## Description

In music, a scale is made up of seven different values (A through G inclusive) with the ROOT value occuring twice forming the scale's first and eighth (last) note.

So if the root = B, the scale looks like this:

```
  B C D E F G A B
```

and if the root = F, the scale looks like this:

```
  F G A B C D E F
```

Each scale has an arpeggio made up of it's first, third, fifth and eighth notes.

So the arpeggio for scale root B looks like this:

```
 B D F B
```

and the arpeggio for scale root F looks like this:

```
 F A C F
```

Write a programme that takes any possible root note and returns it's arpeggio in an array. If the object input isn't a root note, return 'undefined/Nothing'. Watch for capitalization!

Example:

```js
arpeggio('A') == ['A', 'C', 'E', 'A'];
arpeggio('E') == ['E', 'G', 'B', 'E'];
arpeggio('Z') == undefined;
arpeggio('a') == undefined;
```

## My Solution

**JavaScript**

```js
const arpeggio = (root) => (
  (notes = 'ABCDEFG'),
  notes.includes(root)
    ? [root, notes[(notes.indexOf(root) + 2) % 7], notes[(notes.indexOf(root) + 4) % 7], root]
    : undefined
);
```

```js
const arpeggio = (root) => {
  const notes = 'ABCDEFG';
  if (!notes.includes(root)) return;
  const rootIdx = notes.indexOf(root);
  return [root, notes[(rootIdx + 2) % 7], notes[(rootIdx + 4) % 7], root];
};
```