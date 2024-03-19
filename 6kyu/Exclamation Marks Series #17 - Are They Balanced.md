# [Exclamation Marks Series #17 - Are They Balanced?](https://www.codewars.com/kata/57fb44a12b53146fe1000136)

## Description

Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

**Examples**

```
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
```

## My Solution

**JavaScript**

```js
const balance = (left, right) =>
  ['Left', 'Balance', 'Right'][
    Math.sign(
      [left, right].reduce(
        (acc, cur, i) => acc + (i ? 1 : -1) * (2 * cur.split('!').length + 3 * cur.split('?').length),
        0
      )
    ) + 1
  ];
```

```js
const balance = (left, right) => {
  const [leftWeight, rightWeight] = [left, right].map((v) => 2 * v.split('!').length + 3 * v.split('?').length);
  return leftWeight > rightWeight ? 'Left' : rightWeight > leftWeight ? 'Right' : 'Balance';
};
```

```js
const balance = (left, right) => {
  const leftWeight = 2 * left.split('!').length + 3 * left.split('?').length;
  const rightWeight = 2 * right.split('!').length + 3 * right.split('?').length;

  if (leftWeight > rightWeight) return 'Left';
  if (rightWeight > leftWeight) return 'Right';
  return 'Balance';
};
```

**Python**

```py
def balance(left, right):
    weights = [sum([2 if c == "!" else 3 for c in side]) for side in [left, right]]
    return "Left" if weights[0] > weights[1] else "Right" if weights[1] > weights[0] else "Balance"
```

```py
def balance(left, right):
    leftWeight = sum([2 if c == "!" else 3 for c in left])
    rightWeight = sum([2 if c == "!" else 3 for c in right])
    return "Left" if leftWeight > rightWeight else "Right" if rightWeight > leftWeight else "Balance"
```
