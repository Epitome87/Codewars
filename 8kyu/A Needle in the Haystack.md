# A Needle in the Haystack

## Description

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

**Example(Input --> Output)**

```
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
```

Note: In COBOL, it should return `"found the needle at position 6"`

## My Solution

**JavaScript**

```js
const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`;
```

**TypeScript**

```ts
export const findNeedle = (haystack: any[]): string => `found the needle at position ${haystack.indexOf('needle')}`;
```
