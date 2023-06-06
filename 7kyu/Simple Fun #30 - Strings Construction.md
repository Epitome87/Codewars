# [Simple Fun #30: Strings Construction]()

## Description

**Task**

How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

**Example**

For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.

**Input/Output**

- [input] string A

String to construct, A contains only lowercase English letters.

Constraints: 3 ≤ A.length ≤ 9.

- [input] string B

String containing needed letters, B contains only lowercase English letters.

Constraints: 3 ≤ B.length ≤ 50.

- [output] an integer

## My Solution

**JavaScript**

```js
const stringsConstruction = (A, B) => {
  const countA = [...A].reduce((acc, curr) => ({ ...acc, [curr]: acc[curr] + 1 || 1 }), {});
  const countB = [...B].reduce((acc, curr) => ({ ...acc, [curr]: acc[curr] + 1 || 1 }), {});
  return Math.min(...Object.entries(countA).map(([key, val]) => ((countB[key] || 0) / val) ^ 0));
};
```

### User Solution

**JavaScript**

```js
function stringsConstruction(str, target) {
  for (let i = 0; ; i++) {
    for (let c of str) {
      if (target.includes(c)) target = target.replace(c, '-');
      else return i;
    }
  }
}
```
