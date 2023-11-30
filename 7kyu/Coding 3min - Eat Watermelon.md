# [Coding 3min: Eat Watermelon](https://www.codewars.com/kata/570df12ce6e9282a7d000947)

## Description

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

**Task**

Summer is coming, John has some watermelon to eat. When he eats a piece of watermelon into his mouth, if there are more than 5 watermelon seeds, John spit them out; if not, John will swallow them down.

Give you a parameter watermelon(2D number array, 8x8), 0 is the watermelon flesh, 1 is the watermelon seed.

```
1,0,0,1,1,1,0,1
1,0,1,0,1,1,0,0
1,1,1,1,0,0,0,0
0,1,0,1,1,1,1,0
0,0,0,1,0,1,0,0
1,1,1,0,0,0,1,1
1,0,1,1,0,0,0,0
0,0,0,0,0,0,0,0

John eats 1/4 every time(4x4 matrix)...

1,0,0,1,1,1,0,1      x,x,x,x,1,1,0,1      x,x,x,x,x,x,x,x
1,0,1,0,1,1,0,0      x,x,x,x,1,1,0,0      x,x,x,x,x,x,x,x
1,1,1,1,0,0,0,0      x,x,x,x,0,0,0,0      x,x,x,x,x,x,x,x
0,1,0,1,1,1,1,0      x,x,x,x,1,1,1,0      x,x,x,x,x,x,x,x
0,0,0,1,0,1,0,0  ==> 0,0,0,1,0,1,0,0  ==> 0,0,0,1,0,1,0,0
1,1,1,0,0,0,1,1      1,1,1,0,0,0,1,1      1,1,1,0,0,0,1,1
1,0,1,1,0,0,0,0      1,0,1,1,0,0,0,0      1,0,1,1,0,0,0,0
0,0,0,0,0,0,0,0      0,0,0,0,0,0,0,0      0,0,0,0,0,0,0,0

                     x,x,x,x,x,x,x,x      x,x,x,x,x,x,x,x
                     x,x,x,x,x,x,x,x      x,x,x,x,x,x,x,x
                     x,x,x,x,x,x,x,x      x,x,x,x,x,x,x,x
                     x,x,x,x,x,x,x,x      x,x,x,x,x,x,x,x
                 ==> x,x,x,x,0,1,0,0  ==> x,x,x,x,x,x,x,x
                     x,x,x,x,0,0,1,1      x,x,x,x,x,x,x,x
                     x,x,x,x,0,0,0,0      x,x,x,x,x,x,x,x
                     x,x,x,x,0,0,0,0      x,x,x,x,x,x,x,x

Return a number that John spit out how much the watermelon seeds.
```

**Example**

```
In accordance with the above example, John spit out:
10(1st eat)+8(2nd eat)+7(3rd eat)+0(4th eat)=25
So, sc(watermelon) should return 25

Another example:

watermelon=[
[0,1,0,0,0,0,1,0],
[0,0,1,0,1,0,0,0],
[0,1,1,0,1,0,0,0],
[0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,1,0],
[0,0,1,0,1,0,1,0],
[0,1,0,1,1,0,0,0],
[0,1,0,0,0,0,0,1]]

John spit out: 0(1st eat)+0(2nd eat)+0(3rd eat)+0(4th eat)=0
So, sc(watermelon) should return 0
(John swallowed all the watermelon seeds)
```

## My Solution

**JavaScript**

```js
const sc = (watermelon) => {
  return [...Array(4)].reduce((acc, _, i) => {
    let seedsThisBite = 0;
    for (let r = i < 2 ? 0 : 4; r < (i < 2 ? 4 : 8); r++)
      for (let c = i % 2 ? 4 : 0; c < (i % 2 ? 8 : 4); c++) seedsThisBite += watermelon[r][c];
    return acc + (seedsThisBite > 5 ? seedsThisBite : 0);
  }, 0);
};
```

```js
const sc = (watermelon) => {
  let seedsSpit = 0;

  for (let i = 0; i < 4; i++) {
    let seedsThisBite = 0;
    for (let r = i < 2 ? 0 : 4; r < (i < 2 ? 4 : 8); r++)
      for (let c = i % 2 ? 4 : 0; c < (i % 2 ? 8 : 4); c++) seedsThisBite += watermelon[r][c];
    if (seedsThisBite > 5) seedsSpit += seedsThisBite;
  }

  return seedsSpit;
};
```

### User Solution

**JavaScript**

```js
const sc = (watermelon) =>
  watermelon
    .reduce((pre, val, idx) => (val.forEach((v, i) => (pre[(i > 3) + (idx > 3) * 2] += v)), pre), [0, 0, 0, 0])
    .reduce((pre, val) => pre + val * (val > 5), 0);
```
